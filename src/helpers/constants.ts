export const BASE_API_URL = 'http://localhost:5200/api/';

export const ENDPOINTS = {
  USER: BASE_API_URL + '/user',
  STICKY_NOTE: BASE_API_URL + '/stickyNote',
  TO_DO_LIST: BASE_API_URL + '/toDoList'
};

export enum MESSAGES {
  INVALID_USERNAME_PASSWORD = 'Invalid username or password.',
  ERROR_FROM_API = 'Error received from API.'
}
