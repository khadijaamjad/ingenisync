import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api-service/api-service.service';
import { ListItemModalComponent } from '../list-item-modal/list-item-modal.component';
import { ToDoList } from '../../models/ToDoList';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent implements OnInit {
  toDoLists: ToDoList[] | undefined;
  @Output() toDoListEvent = new EventEmitter<ToDoList>();

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getToDoLists();
  }

  getToDoLists() {
    this.apiService.getLists().subscribe((apiResponse) => {
      this.toDoLists = apiResponse?.length === 0 ? undefined : apiResponse;
    });
  }

  navigateToList(toDoList: ToDoList) {
    this.router.navigate(['/list'], { state: toDoList });
  }

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
