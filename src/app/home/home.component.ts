import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
}
