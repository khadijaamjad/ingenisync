import Swal from 'sweetalert2';

export function isSuccessResponse(data: any) {
  return data.responseCode?.toLowerCase() === 'success';
}

export function getSuccessAlert(msg: string) {
  return Swal.fire({
    title: 'Success',
    text: msg,
    icon: 'success',
    confirmButtonColor: '#04336d',
  });
}

export function getErrorAlert(msg: string) {
  return Swal.fire({
    title: 'Error',
    text: msg || 'An unexpected error occurred.',
    icon: 'error',
    confirmButtonColor: '#04336d',
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
    'Update project timeline',
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
