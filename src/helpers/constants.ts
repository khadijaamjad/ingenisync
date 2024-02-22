export const BASE_API_URL = 'http://localhost:5200/api/';

export const ENDPOINTS = {
  USER: BASE_API_URL + '/user',
  STICKY_NOTE: BASE_API_URL + '/stickyNote',
  TO_DO_LIST: BASE_API_URL + '/toDoList',
  UPCOMING_TASKS_TODAY: BASE_API_URL + '/toDoList/today',
  UPCOMING_TASKS_TOMORROW: BASE_API_URL + '/toDoList/tomorrow',
  UPCOMING_TASKS_WEEK: BASE_API_URL + '/toDoList/week'
};

export enum MESSAGES {
  INVALID_USERNAME_PASSWORD = 'Invalid username or password.',
  ERROR_FROM_API = 'Error received from API.',
  NOTE_DELETED= 'Note deleted successfully'
}

export const TEXT_FIELDS_MAX_LENGTH = 30;
