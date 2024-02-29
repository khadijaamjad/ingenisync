import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../../models/ToDoList';
import { ToDoItem } from '../../models/ToDoItem';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListItemModalComponent } from '../list-item-modal/list-item-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  toDoList: ToDoList | undefined;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
    const state = this.router?.getCurrentNavigation()?.extras.state;

    if (state) {
      this.toDoList = <ToDoList>state;
    }
  }

  ngOnInit() {}

  openListItemModal(note?: ToDoItem) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = note;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(ListItemModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: ToDoItem) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }
}
