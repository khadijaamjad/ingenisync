import { Component } from '@angular/core';
import { ListItem } from '../../models/ListItem';
import { generateRandomTask, generateRandomDate } from '../../helpers/utils';

@Component({
  selector: 'app-todays-tasks',
  templateUrl: './todays-tasks.component.html',
  styleUrl: './todays-tasks.component.scss',
})
export class TodaysTasksComponent {
  // Generate random tasks for today
  tasksForToday: ListItem[] = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    task: generateRandomTask(),
    date: generateRandomDate(0),
  }));
}
