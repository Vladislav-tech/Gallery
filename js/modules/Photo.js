  'use strict';
  let id = 0;

  class Photo {
    /* Creating Object with this properties */
     constructor({imgUrl, title, text, likes, date, group}) {
       this.imgUrl = typeof imgUrl === 'string' ? imgUrl : 'img/deffault.jpg';
       this.title = typeof title === 'string' ? title : 'Title';
       this.text = typeof text === 'string' ? text : 'Text';
       this.likes = typeof likes === 'number' ? likes : 0;

       if(typeof date === 'number') {
         this.date = new Date(date);
       } 
       else if(typeof date === 'string') {
       	 this.date = new Date(Date.parse(date));
       } 
       else {
        this.date = new Date(Date.now());
       }

       this.group = typeof group === 'string' ? group : 'default';
       this.id = id++;
     }

     /* Rendering (temporary version) */
     render(container) {
       const wrapper = document.createElement('div');
       wrapper.classList.add('someClassName');
       container.insertAdjacentHTML('beforeEnd', 
        `
         <div class="gallery-item" style="background: url('${this.imgUrl}') center no-repeat;">
            <div class="gallery-item__share-image"></div>
            <div class="gallery-item__data">
                <span class="photo-data">
                 ${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}
                </span>
             </div>
            <div class="gallery-item__likes likes">
                 <span class="likes-amount">${this.likes}</span>
                 <img src="img/icons/like.svg" alt="like" class="likes-icon" width="28" height="26">
             </div>

            <div class="gallery-item__short-description">
                <h5 class="gallery-item__title">${this.title}</h5>
                <p class="gallery-item__text">${this.text}</p>
            </div>
        </div>
        `);

       return this;
     }
  }

  export default Photo;