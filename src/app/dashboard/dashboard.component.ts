import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  sideNavOpened = false;

  list: { label: string; url: string; isActive: boolean }[] = [
    { label: 'Dashboard', url: '/dashboard', isActive: true },
    { label: 'Reports', url: '/reports', isActive: false },
    { label: 'Settings', url: '/settings', isActive: false },
  ];

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
