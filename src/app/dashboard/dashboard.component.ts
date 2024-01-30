import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  list: { label: string; url: string; isActive: boolean }[] = [
    { label: 'Dashboard', url: '/dashboard', isActive: true },

    //Tasks Section
    { label: 'Upcoming', url: '/upcoming', isActive: false },
    { label: 'Today', url: '/today', isActive: false },
    { label: 'Calendar', url: '/calendar', isActive: false },
    { label: 'Sticky Wall', url: '/stickyWall', isActive: false },
    { label: 'Lists', url: '/lists', isActive: false },

    //Settings
    { label: 'Settings', url: '/settings', isActive: false },
  ];

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}
}
