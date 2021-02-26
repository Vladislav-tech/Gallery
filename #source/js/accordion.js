let galleryItems = document.querySelectorAll('.gallery-item');

for (const galleryItem of galleryItems) {
    galleryItem.addEventListener('click', function(evt) {
        if (evt.target.className !== 'gallery-item__share-image' && evt.target.className !== 'gallery-item__likes') {
            console.log('true');
            let shortDescription = galleryItem.lastElementChild;
            if (shortDescription.style.maxHeight) {
                shortDescription.style.maxHeight = null;
            } else {
                shortDescription.style.maxHeight = shortDescription.scrollHeight + "px";
            }
        }
    });
}