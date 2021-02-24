  import Photo from './modules/Photo.js';
  import PhotoStorage from './modules/PhotoStorage.js';
  'use strict';

  const photoStorage = new PhotoStorage({container: '.gallery-items'});
  const sortCategories = document.querySelector('#sortCategories');

  photoStorage.addPhoto({
    imgUrl: 'img/animals/cats/1.jpg', 
    title: 'У Сёмочки День Рождения!', 
    text: `Вы только посмотрите на этого прекрасного малыша! 
           Он такой хорошенький, красивый и прелестный! <br>
           Я очень люблю своего Сёму.&#128151;&#128151;&#128151; 
           Мы сделали эту фотографию на его день рождение (5 годиков)!  
           &#127881;...`, 
    likes: 33, 
    date: '2019-05-20', 
    group: 'cats'
  });

  photoStorage.addPhoto({
    imgUrl: 'img/animals/cats/2.jpg', 
    title: 'My title', 
    text: 'text text text...', 
    likes: 24, 
    date: '2019-05-13', 
    group: 'cats'
  });

  photoStorage.addPhoto({
    imgUrl: 'img/animals/dogs/2.jpg', 
    title: 'My title', 
    text: 'text text text...', 
    likes: 27, 
    date: '2019-05-20', 
    group: 'dogs'
  });

  photoStorage.addPhoto({
    imgUrl: 'img/animals/dogs/3.jpg',
    title: 'My titttasd asdasd asddasda adsad.',
    text: 'TEXT TeXT Ttle is My title is very goood.My title is very goood.My title is very goood. very gooodEXT TEXT',
    likes: 12,
    date: '2019-07-22',
    group: 'dogs'
  });

  photoStorage.addSort('likes+', (photoA, photoB) => {
    return photoA.likes - photoB.likes;
  });

  photoStorage.addSort('likes-', (photoA, photoB) => {
    return photoB.likes - photoA.likes;
  });

  photoStorage.addSort('date+', (photoA, photoB) => {
    return photoA.date.getTime() - photoB.date.getTime();
  });

  photoStorage.addSort('date-', (photoA, photoB) => {
    return photoB.date.getTime() - photoA.date.getTime();
  });

  /* USING */

  photoStorage.useSort(sortCategories.value);
  photoStorage.render();

  sortCategories.addEventListener('change', (event) => {
    photoStorage.useSort(event.target.value);
    photoStorage.render();
  });