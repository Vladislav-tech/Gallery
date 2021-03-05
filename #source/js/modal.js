
  const modal = document.querySelector('.modal-wrapper');
  const modalBtn = document.querySelector('.add-photo');

  modalBtn.addEventListener('click', () => {
      console.log('click');
      modal.classList.toggle('modal-wrapper_active');
  });