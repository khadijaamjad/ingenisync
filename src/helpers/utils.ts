import Swal from 'sweetalert2';

export function isSuccessResponse(data: any) {
  return data.responseCode?.toLowerCase() === 'success';
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
