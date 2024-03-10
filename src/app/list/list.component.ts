import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../../models/ToDoList';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListItemModalComponent } from '../list-item-modal/list-item-modal.component';
import { ApiService } from '../services/api-service/api-service.service';
import { isSuccessResponse } from '../../helpers/utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  toDoList: ToDoList | undefined;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private apiService: ApiService
  ) {
    const state = this.router?.getCurrentNavigation()?.extras.state;

    if (state) {
      this.toDoList = <ToDoList>state;
    }
  }

  getList() {
    this.apiService.getSingleList(this.toDoList!._id).subscribe((data) => {
      if (isSuccessResponse(data)) this.toDoList = data;
    });
  }

  openListItemModal(toDoList?: ToDoList) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = toDoList;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';

    const dialogRef = this.dialog.open(ListItemModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: ToDoList) => {
      if (data) {
        this.getList();
      }
    });
  }
}
