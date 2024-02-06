import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/ListItem';
import {
  generateRandomTask,
  generateRandomCompletedStatus,
} from '../../helpers/utils';

@Component({
  selector: 'app-todays-tasks',
  templateUrl: './todays-tasks.component.html',
  styleUrl: './todays-tasks.component.scss',
})
export class TodaysTasksComponent implements OnInit {
  // Generate random tasks for today
  tasksForToday: ListItem[] = [];

  constructor() {
    this.tasksForToday = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      task: generateRandomTask(),
      date: new Date().toISOString().split('T')[0],
      completed: generateRandomCompletedStatus(),
    }));
  }

  ngOnInit(): void {}
}
