import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

export function isSuccessResponse(data: any) {
  return data !== null || data !==undefined;
}

export function getSuccessAlert(msg: string) {
  return Swal.fire({
    title: 'Success',
    text: msg,
    icon: 'success',
    confirmButtonColor: '#04336d'
  });
}

export function getErrorAlert(msg: string) {
  return Swal.fire({
    title: 'Error',
    text: msg || 'An unexpected error occurred.',
    icon: 'error',
    confirmButtonColor: '#04336d'
  });
}

export function getConfirmationAlert(message?: string) {
  return Swal.fire({
    title: 'Confirmation',
    text: message
      ? message
      : 'Are you sure you want to proceed with deletion?',
    icon: 'warning',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes, Delete',
    cancelButtonColor: '#ff110e',
    confirmButtonColor: '#04336d',
    reverseButtons: true
  });
}

// Function to generate random tasks
export function generateRandomTask(): string {
  const tasks = [
    'Complete project presentation',
    'Review meeting notes',
    'Write code documentation',
    'Submit expense report',
    'Prepare for team workshop',
    'Attend client call',
    'Read new industry articles',
    'Update project timeline'
  ];

  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
}

// Function to generate random date for today, tomorrow, and this week
export function generateRandomDate(offset: number): string {
  const today = new Date();
  today.setDate(today.getDate() + offset);
  const isoDateString = today.toISOString().split('T')[0];
  return isoDateString;
}

export function generateRandomCompletedStatus(): boolean {
  return Math.random() > 0.5;
}

export const handleError = <T>(errorResp?: T) => {
  return (error: any): Observable<T> => {
    if (error.status === 400) getErrorAlert(error.error.message);
    return of(errorResp as T);
  };
};
