import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean;

  constructor() {
    this.darkMode = this.getTheme();
    this.setDarkMode(this.darkMode);
  }

  getTheme() {
    const isDarkModeSet = localStorage.getItem('isDarkMode');
    return isDarkModeSet !== null ? JSON.parse(isDarkModeSet) : false;
  }

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    localStorage.setItem('isDarkMode', `${isDarkMode}`);

    if (isDarkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }
}
