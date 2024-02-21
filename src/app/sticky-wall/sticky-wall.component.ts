import { Component, OnInit } from '@angular/core';
import { StickyNote } from '../../models/StickyNote';
import { ApiService } from '../services/api-service/api-service.service';
import { StickyWallModalComponent } from '../sticky-wall-modal/sticky-wall-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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

  openStickyNoteModal(note?: StickyNote) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = note;
    dialogConfig.width = '30%';

    const dialogRef = this.dialog.open(StickyWallModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: StickyNote) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }
}
