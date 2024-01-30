import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-utils',
  templateUrl: './calendar-utils.component.html',
  styleUrl: './calendar-utils.component.scss',
})
export class CalendarUtilsComponent {
  @Input() view: CalendarView = CalendarView.Month;

  @Input() viewDate: Date = new Date();

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
