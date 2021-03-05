  import Photo from './modules/Photo.js';
  import PhotoStorage from './modules/PhotoStorage.js';
  'use strict';

  const photoStorage = new PhotoStorage({
   data: [
     {
        imgUrl: 'img/animals/cats/1.jpg', 
        title: 'У Сёмочки День Рождения!', 
        text: `Вы только посмотрите на этого прекрасного малыша! 
               Он такой хорошенький, красивый и прелестный! <br>
               Я очень люблю своего Сёму.&#128151;&#128151;&#128151; 
               Мы сделали эту фотографию на его день рождение (5 годиков)!  
               &#127881;...`, 
        likes: 53, 
        date: '23-12-2018', 
        group: 'cats'
     },
     {
        imgUrl: 'img/animals/parrots/1.webp', 
        title: 'Грациозный Кеша', 
        text: `Решил сделать фотографию своего любимого попугая Кеши. Он довольно таки фотогеничный.
                                Больше всего ему нравится, когда его гладят по головке и дают печенюшки.`, 
        likes: 13, 
        date: '25-12-2018', 
        group: 'parrots'
      },
      {
        imgUrl: 'img/animals/guinea-pigs/1.jpg', 
        title: 'Агата', 
        text: `Мне 12 лет и мне подарили морскую свинку. Я назвала её в честь своей любимой группы - Агата Кристи.
               Моя морская свинка любит играть, купаться и слушать вместе со мной Агату Кристи. Я люблю своего питомца.`, 
        likes: 35, 
        date: '29-12-2018', 
        group: 'guinea-pigs'
      },
      {
        imgUrl: 'img/animals/guinea-pigs/2.jpg',
        title: 'Веня',
        text: `Веня любит спать, есть и лежать на боку. 
               Ему нравится есть морковку и сухари, которые мы вместе с мужем делаем по вторникам.
               Нашему маленькому другу иногда нравится гулять по квартире. Мы выпускаем его каждую пятницу.`,
        likes: 44,
        date: '31-12-2018',
        group: 'guinea-pigs'
      },
      {
        imgUrl: 'img/animals/dogs/1.webp',
        title: 'Рекс, Таша, Дик',
        text: `Это мои детки &#128525;. 
               Они - маленькие озорные щенята, которые любят бегать, играть и кусаться &#128021;
               Ох, как же тяжело было сделать это фото &#128247;. Они всё время игрались!`,
        likes: 12,
        date: '01-01-2019',
        group: 'dogs'
      },
      {
        imgUrl: 'img/animals/dogs/2.jpg',
        title: 'Анита',
        text: `Её зовут Анита, ей 7 лет. Она любит гулять, играть с резиновым мячом. 
               Аните не нравится шум, купаться и кошки. Я не знаю почему ей это не нравится.`,
        likes: 54,
        date: '13-01-2019',
        group: 'dogs'
      },
      {
        imgUrl: 'img/animals/parrots/2.jpg',
        title: 'Годжи',
        text: `Попугаю Годжи 4 года. Он в расцвете сил, очень любит петь, летать и конечно играть! 
               Мне подарили родители его на 18-летие. Я забочусь и люблю своего попугайчика.`,
        likes: 5,
        date: '13-01-2019',
        group: 'parrots'
      },
      {
        imgUrl: 'img/animals/parrots/3.jpg',
        title: 'Такиша',
        text: `Такиша - активный попугай. Очень любит петь и шуметь в клетке. 
               Иногда приходится даже накрывать простынёй
               клетку, чтобы она не шумела. В любом случае, с ней не соскучишься вовсе!`,
        likes: 33,
        date: '15-01-2019',
        group: 'parrots'
      },
      {
        imgUrl: 'img/animals/snakes/1.jpg',
        title: 'Каа',
        text: `Некоторым людям не нравятся змеи по самым разным причинам. Каа - вовсе не страшный монстер,
               а милый друг. Ему нравится, когда его гладят и находиться в тепле.`,
        likes: 43,
        date: '19-01-2019',
        group: 'snakes'
      }
    ], 
    container: '.gallery-items'
  });
  console.log(photoStorage);

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

  photoStorage.addFilter('group', (photo, groups) => {

    let isSelectedGroup = false;

    if(groups.others && !(photo.group in groups)) {
      isSelectedGroup = true;
    } else {
      isSelectedGroup = groups[photo.group];
    }

    return isSelectedGroup;
  });

  /* USING */
  ;(() => {
    const groups = {};
    const sortCategories = document.querySelector('#sortCategories');
    const checkboxContainer = document.querySelector('.checkboxes');

     changeSelectGroups();
     startSystem();

    sortCategories.addEventListener('change', startSystem);

    checkboxContainer.addEventListener('click', (event) => {
      if(!event.target.classList.contains('custom-checkbox')) {
        return;
      }

      changeSelectGroups();
      startSystem();
    });

    function changeSelectGroups() {
      let checkboxes = checkboxContainer.querySelectorAll('.custom-checkbox');
      checkboxes.forEach((checkbox) => {
        groups[checkbox.dataset.group] = checkbox.checked;
      });
    }

    function startSystem() {
      photoStorage.useFilter('group', groups);
      photoStorage.useSort(sortCategories.value);
      photoStorage.render();
    }

  })();