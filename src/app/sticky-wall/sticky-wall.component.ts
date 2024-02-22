import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StickyWallModalComponent } from '../sticky-wall-modal/sticky-wall-modal.component';
import { getConfirmationAlert, getSuccessAlert, isSuccessResponse } from '../../helpers/utils';
import { MESSAGES } from '../../helpers/constants';
import { StickyNote } from '../../models/StickyNote';
import { ApiService } from '../services/api-service/api-service.service';

@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrl: './sticky-wall.component.scss'
})
export class StickyWallComponent implements OnInit {
  notes: StickyNote[] | undefined;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getStickyNotes();
  }

  getStickyNotes() {
    this.apiService.getStickyNotes().subscribe((apiResponse) => {
      const notes = apiResponse;
      this.notes = notes?.length === 0 ? undefined : notes;
    });
  }

  deleteStickyNote(stickyNote: StickyNote) {
    getConfirmationAlert().then((result) => {
      if (result.isConfirmed) {
        const noteToDelete = this.notes?.find(
          (x) => x._id === stickyNote._id
        );
        if (!noteToDelete) return;

        this.apiService
          .deleteStickyNote(noteToDelete)
          .subscribe((apiResponse) => {
            if (isSuccessResponse(apiResponse)) {
              getSuccessAlert(MESSAGES.NOTE_DELETED);
              this.ngOnInit();
            }
          });
      }
    });
  }

  openStickyNoteModal(note?: StickyNote) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = note;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(StickyWallModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: StickyNote) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }
}
