const modal = document.querySelector('.modal-wrapper');
const modalBtn = document.querySelector('.add-photo');

modalBtn.addEventListener('click', function() {
    console.log('click');
    modal.classList.toggle('modal-wrapper_active');
});