import { Component } from '@angular/core';
import { ThemeService } from '../services/theme-service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  list: { label: string; icon: string; url: string }[] = [
    { label: 'Dashboard', icon: 'assessment', url: '/dashboard' },

    //Tasks Section
    { label: 'Upcoming', icon: 'event', url: '/upcoming' },
    { label: 'Today', icon: 'layers', url: '/today' },
    { label: 'Calendar', icon: 'date_range', url: '/calendar' },
    { label: 'Sticky Wall', icon: 'note', url: '/stickyWall' },
    { label: 'Lists', icon: 'view_list', url: '/lists' },

    //Settings
    { label: 'Settings', icon: 'settings', url: '/settings' }
  ];

  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(!this.isDarkMode);
  }
}
