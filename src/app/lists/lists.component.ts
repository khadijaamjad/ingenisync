import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from '../services/api-service/api-service.service';
import { ListItemModalComponent } from '../list-item-modal/list-item-modal.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
})
export class ListsComponent implements OnInit {
  listNames: string[] = [
    'Office work',
    'Study',
    'Birthday',
    'Grocery',
    'Appointments',
  ];

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit() {}

  openListModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    const dialogRef = this.dialog.open(ListItemModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }
}
