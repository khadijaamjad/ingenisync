import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem';
import { TaskTimelineEnum } from '../../models/ToDoList';
import { ApiService } from '../services/api-service/api-service.service';

@Component({
  selector: 'app-todays-tasks',
  templateUrl: './todays-tasks.component.html',
  styleUrl: './todays-tasks.component.scss'
})
export class TodaysTasksComponent implements OnInit {
  tasksForToday: ToDoItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTasksForToday();
  }

  getTasksForToday() {
    this.apiService
      .getUpcomingDueItems(TaskTimelineEnum.Today)
      .subscribe((apiResponse) => {
        this.tasksForToday = apiResponse?.length ? apiResponse : [];
      });
  }
}
