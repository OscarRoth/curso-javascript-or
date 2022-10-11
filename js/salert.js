//btn de sweet alert
const btnAlert = document.querySelector('#btn-alert');

btnAlert.addEventListener('click', () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
})
