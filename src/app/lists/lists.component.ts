import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
})
export class ListsComponent {
  listNames: string[] = [
    'Office work',
    'Study',
    'Birthday',
    'Grocery',
    'Appointments',
  ];
}
