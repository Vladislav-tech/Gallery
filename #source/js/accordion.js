
  const galleryItems = document.querySelector('.gallery-items');


  galleryItems.addEventListener('click', (event) => {
    if ( event.target.classList.contains('gallery-item') ) {
     return;
    }

    let shortDescription = event.target.lastElementChild;

    if (shortDescription.style.maxHeight) {
        shortDescription.style.maxHeight = '0px';
    }   else {
        shortDescription.style.maxHeight = `${shortDescription.scrollHeight}px`;
    }
    
  });
