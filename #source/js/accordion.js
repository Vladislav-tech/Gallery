const galleryItems = document.querySelector('.gallery-items');

galleryItems.addEventListener('click', function(evt){
    if (evt.target.className === 'gallery-item') {
        let shortDescription = evt.target.lastElementChild;
        if (shortDescription.style.maxHeight) {
            shortDescription.style.maxHeight = null;
        }   else {
            shortDescription.style.maxHeight = shortDescription.scrollHeight + 'px';
        }
    } 
});