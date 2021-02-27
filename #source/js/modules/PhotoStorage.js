  import Photo from './Photo.js';
  'use strict';

  class PhotoStorage {
     constructor({container, data}) {
       this.container = document.querySelector(container) || document.body;
       this.photos = Array.isArray(data) ? data : [];
       this.currentPhotos = [];
       this.sorts = {};
       this.filters = {};
     }

     /* Adding */

     addPhoto(props) {
       if(typeof props !== 'object') {
         throw new TypeError('properties is not a object');
       }

       const photo = new Photo(props);
       this.photos.push(photo);

       return this;
     }

     addSort(sortName, sorttingFunction) {
       if(typeof sorttingFunction !== 'function') {
        throw new TypeError('sorttingFunction is not a function');
       }
       else if(sorttingFunction.length < 2) {
        throw new Error('sorttingFunction must contain two arguments.');
       }

       this.sorts[sortName] = sorttingFunction;

       return this;
     }

     addFilter(filterName, filterFunction) {
       if(typeof filterFunction !== 'function') {
        throw new TypeError('filterFunction is not a function');
       }
       else if(filterFunction.length < 1) {
        throw new Error('filterFunction must contain one argument.');
       }

       this.filters[filterName] = filterFunction;

       return this;
     }

     /* Deleting */

     deletePhoto(index) {
       if(typeof index !== 'number') {
         throw new TypeError('Index type is not a number.');
       }
       else if(index < 0) {
        throw new Error('The index of the photo to be deleted must be 0 or more.');
       }
       else if(index > (this.photos.length - 1)) {
        throw new Error('The index of the deleted photo must be less than the count of photos.');
       }

       this.photos.splice(index, 1);
       return this;
     }

     deleteSort(sortName) {
       if(typeof sortName !== 'string') {
        throw new TypeError('sortName type is not a string');
       }
       else if( !this.sorts[sortName] ) {
        throw new Error('This key does not exist in sorts.');
       }

       delete this.sorts[sortName];
       
       return this;
     }

     /* Using */ 

     useFilter(filterName, info) {
       if(typeof info !== 'object') {
        throw new TypeError('info (information) is not a object');
       }

       const filterFunction = this.filters[filterName];
       this.currentPhotos = this.photos.filter((photo) => {
        return filterFunction(photo, info);
       });

       return this;
     }

     useSort(sortName) {
       const sorttingFunction = this.sorts[sortName];
       this.currentPhotos.sort(sorttingFunction);
       return this;
     }

     /* Rendering */

     render() {
       this.container.innerHTML = '';
       const photos = this.currentPhotos;
       for(let photo of photos) {
          photo.render(this.container);
       }

       return this;
     }
  }


  export default PhotoStorage;