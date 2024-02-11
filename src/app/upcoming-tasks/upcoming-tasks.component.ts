import { Component } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem';
import { generateRandomDate, generateRandomTask } from '../../helpers/utils';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrl: './upcoming-tasks.component.scss'
})
export class UpcomingTasksComponent {
  // Generate random tasks for today
  tasksForToday: ToDoItem[] = Array.from({ length: 5 }, (_, index) => ({
    _id: '' + index + 1,
    description: generateRandomTask(),
    dueDate: generateRandomDate(0)
  }));

  // Generate random tasks for tomorrow
  tasksForTomorrow: ToDoItem[] = Array.from({ length: 5 }, (_, index) => ({
    _id: '' + index + 1,
    description: generateRandomTask(),
    dueDate: generateRandomDate(1)
  }));

  // Generate random tasks for this week
  tasksForThisWeek: ToDoItem[] = Array.from({ length: 7 }, (_, index) => ({
    _id: '' + index + 1,
    description: generateRandomTask(),
    dueDate: generateRandomDate(index + 2) // Offset to ensure tasks are for this week
  }));
}
