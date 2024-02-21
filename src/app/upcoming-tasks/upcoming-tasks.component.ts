import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem';
import { TaskTimelineEnum } from '../../models/ToDoList';
import { ApiService } from '../services/api-service/api-service.service';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrl: './upcoming-tasks.component.scss'
})
export class UpcomingTasksComponent implements OnInit {
  tasksForToday: ToDoItem[] = [];
  tasksForTomorrow: ToDoItem[] = [];
  tasksForThisWeek: ToDoItem[] = [];
  totalTasksDueThisWeek = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUpcomingTasks();
  }

  getAllUpcomingTasks() {
    // Get tasks for today
    this.apiService
      .getUpcomingDueItems(TaskTimelineEnum.Today)
      .subscribe((apiResponse) => {
        this.tasksForToday = apiResponse?.length ? apiResponse : [];
        this.totalTasksDueThisWeek += this.tasksForThisWeek.length;
      });

    // Get tasks for tomorrow
    this.apiService
      .getUpcomingDueItems(TaskTimelineEnum.Tomorrow)
      .subscribe((apiResponse) => {
        this.tasksForTomorrow = apiResponse?.length ? apiResponse : [];
        this.totalTasksDueThisWeek += this.tasksForTomorrow.length;
      });

    // Get tasks for this week
    this.apiService
      .getUpcomingDueItems(TaskTimelineEnum.ThisWeek)
      .subscribe((apiResponse) => {
        this.tasksForThisWeek = apiResponse?.length ? apiResponse : [];
        this.totalTasksDueThisWeek += this.tasksForThisWeek.length;
      });
  }
}
