import { Component } from '@angular/core';
import { ListItem } from '../../models/ListItem';
import { generateRandomDate, generateRandomTask } from '../../helpers/utils';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrl: './upcoming-tasks.component.scss',
})
export class UpcomingTasksComponent {
  // Generate random tasks for today
  tasksForToday: ListItem[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    task: generateRandomTask(),
    date: generateRandomDate(0),
  }));

  // Generate random tasks for tomorrow
  tasksForTomorrow: ListItem[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    task: generateRandomTask(),
    date: generateRandomDate(1),
  }));

  // Generate random tasks for this week
  tasksForThisWeek: ListItem[] = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    task: generateRandomTask(),
    date: generateRandomDate(index + 2), // Offset to ensure tasks are for this week
  }));
}
