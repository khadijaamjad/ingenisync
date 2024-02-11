import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem';
import {
  generateRandomTask,
  generateRandomCompletedStatus
} from '../../helpers/utils';

@Component({
  selector: 'app-todays-tasks',
  templateUrl: './todays-tasks.component.html',
  styleUrl: './todays-tasks.component.scss'
})
export class TodaysTasksComponent implements OnInit {
  // Generate random tasks for today
  tasksForToday: ToDoItem[] = [];

  constructor() {
    this.tasksForToday = Array.from({ length: 5 }, (_, index) => ({
      _id: '' + index + 1,
      description: generateRandomTask(),
      dueDate: new Date().toISOString().split('T')[0],
      completed: generateRandomCompletedStatus()
    }));
  }

  ngOnInit(): void {}
}
