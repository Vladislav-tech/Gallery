!function(){"use strict";var t=[,function(t,e,r){r.r(e);let i=0;e.default=class{constructor({imgUrl:t,title:e,text:r,likes:s,date:o,group:n}){this.imgUrl="string"==typeof t?t:"img/deffault.jpg",this.title="string"==typeof e?e:"Title",this.text="string"==typeof r?r:"Text",this.likes="number"==typeof s?s:0,"number"==typeof o?this.date=new Date(o):"string"==typeof o?(o=o.split("-").reverse().join("-"),this.date=new Date(Date.parse(o))):this.date=new Date(Date.now()),this.group="string"==typeof n?n:"default",this.id=i++}render(t){return t.insertAdjacentHTML("beforeEnd",`\n         <div class="gallery-item" style="background-image: url('${this.imgUrl}'); background-size: cover; background-position: center;">\n            <div class="gallery-item__share-image"></div>\n            <div class="gallery-item__data">\n                <span class="photo-data">\n                 ${this.date.getTime()}\n                </span>\n             </div>\n            <div class="gallery-item__likes likes">\n                 <span class="likes-amount">${this.likes}</span>\n                 <img src="img/icons/like.svg" alt="like" class="likes-icon" width="28" height="26">\n             </div>\n\n            <div class="gallery-item__short-description">\n                <h5 class="gallery-item__title">${this.title}</h5>\n                <p class="gallery-item__text">${this.text}</p>\n            </div>\n        </div>\n        `),this}}},function(t,e,r){r.r(e);var i=r(1);e.default=class{constructor({container:t,data:e}){if(this.container=document.querySelector(t)||document.body,this.photos=[],Array.isArray(e)&&e.length>0)for(let t of e)this.addPhoto(t);this.currentPhotos=[],this.sorts={},this.filters={}}addPhoto(t){if("object"!=typeof t)throw new TypeError("properties is not a object");const e=new i.default(t);return this.photos.push(e),this}addSort(t,e){if("function"!=typeof e)throw new TypeError("sorttingFunction is not a function");if(e.length<2)throw new Error("sorttingFunction must contain two arguments.");return this.sorts[t]=e,this}addFilter(t,e){if("function"!=typeof e)throw new TypeError("filterFunction is not a function");if(e.length<1)throw new Error("filterFunction must contain one argument.");return this.filters[t]=e,this}deletePhoto(t){if("number"!=typeof t)throw new TypeError("Index type is not a number.");if(t<0)throw new Error("The index of the photo to be deleted must be 0 or more.");if(t>this.photos.length-1)throw new Error("The index of the deleted photo must be less than the count of photos.");return this.photos.splice(t,1),this}deleteSort(t){if("string"!=typeof t)throw new TypeError("sortName type is not a string");if(!this.sorts[t])throw new Error("This key does not exist in sorts.");return delete this.sorts[t],this}useFilter(t,e){if("object"!=typeof e)throw new TypeError("info (information) is not a object");const r=this.filters[t];return this.currentPhotos=this.photos.filter((t=>r(t,e))),this}useSort(t){const e=this.sorts[t];return this.currentPhotos.sort(e),this}render(){this.container.innerHTML="";const t=this.currentPhotos;for(let e of t)e.render(this.container);return this}}}],e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};!function(){r.r(i);r(1);var t=r(2);const e=document.querySelector(".theme-icon-wrapper"),s=document.getElementById("theme");s.setAttribute("href",`css/${"dark"===localStorage.getItem("theme")?"dark":"light"}.css`),e.addEventListener("click",(function(){const t="dark"===localStorage.getItem("theme")?"light":"dark";s.setAttribute("href",`css/${t}.css`),localStorage.setItem("theme",t)}));document.querySelector(".gallery-items").addEventListener("click",(t=>{if(!t.target.classList.contains("gallery-item"))return;let e=t.target.lastElementChild;e.style.maxHeight?e.style.maxHeight="0px":e.style.maxHeight=`${e.scrollHeight}px`}));const o=new t.default({data:[{imgUrl:"img/animals/cats/1.jpg",title:"У Сёмочки День Рождения!",text:"Вы только посмотрите на этого прекрасного малыша! \n               Он такой хорошенький, красивый и прелестный! <br>\n               Я очень люблю своего Сёму.&#128151;&#128151;&#128151; \n               Мы сделали эту фотографию на его день рождение (5 годиков)!  \n               &#127881;...",likes:53,date:"23-12-2018",group:"cats"},{imgUrl:"img/animals/parrots/1.webp",title:"Грациозный Кеша",text:"Решил сделать фотографию своего любимого попугая Кеши. Он довольно таки фотогеничный.\n                                Больше всего ему нравится, когда его гладят по головке и дают печенюшки.",likes:13,date:"25-12-2018",group:"parrots"},{imgUrl:"img/animals/guinea-pigs/1.jpg",title:"Агата",text:"Мне 12 лет и мне подарили морскую свинку. Я назвала её в честь своей любимой группы - Агата Кристи.\n               Моя морская свинка любит играть, купаться и слушать вместе со мной Агату Кристи. Я люблю своего питомца.",likes:35,date:"29-12-2018",group:"guinea-pigs"},{imgUrl:"img/animals/guinea-pigs/2.jpg",title:"Веня",text:"Веня любит спать, есть и лежать на боку. \n               Ему нравится есть морковку и сухари, которые мы вместе с мужем делаем по вторникам.\n               Нашему маленькому другу иногда нравится гулять по квартире. Мы выпускаем его каждую пятницу.",likes:44,date:"31-12-2018",group:"guinea-pigs"},{imgUrl:"img/animals/dogs/1.webp",title:"Рекс, Таша, Дик",text:"Это мои детки &#128525;. \n               Они - маленькие озорные щенята, которые любят бегать, играть и кусаться &#128021;\n               Ох, как же тяжело было сделать это фото &#128247;. Они всё время игрались!",likes:12,date:"01-01-2019",group:"dogs"},{imgUrl:"img/animals/dogs/2.jpg",title:"Анита",text:"Её зовут Анита, ей 7 лет. Она любит гулять, играть с резиновым мячом. \n               Аните не нравится шум, купаться и кошки. Я не знаю почему ей это не нравится.",likes:54,date:"13-01-2019",group:"dogs"},{imgUrl:"img/animals/parrots/2.jpg",title:"Годжи",text:"Попугаю Годжи 4 года. Он в расцвете сил, очень любит петь, летать и конечно играть! \n               Мне подарили родители его на 18-летие. Я забочусь и люблю своего попугайчика.",likes:5,date:"13-01-2019",group:"parrots"},{imgUrl:"img/animals/parrots/3.jpg",title:"Такиша",text:"Такиша - активный попугай. Очень любит петь и шуметь в клетке. \n               Иногда приходится даже накрывать простынёй\n               клетку, чтобы она не шумела. В любом случае, с ней не соскучишься вовсе!",likes:33,date:"15-01-2019",group:"parrots"},{imgUrl:"img/animals/snakes/1.jpg",title:"Каа",text:"Некоторым людям не нравятся змеи по самым разным причинам. Каа - вовсе не страшный монстер,\n               а милый друг. Ему нравится, когда его гладят и находиться в тепле.",likes:43,date:"19-01-2019",group:"snakes"}],container:".gallery-items"});console.log(o),o.addSort("likes+",((t,e)=>t.likes-e.likes)),o.addSort("likes-",((t,e)=>e.likes-t.likes)),o.addSort("date+",((t,e)=>t.date.getTime()-e.date.getTime())),o.addSort("date-",((t,e)=>e.date.getTime()-t.date.getTime())),o.addFilter("group",((t,e)=>{let r=!1;return r=!(!e.others||t.group in e)||e[t.group],r})),(()=>{const t={},e=document.querySelector("#sortCategories"),r=document.querySelector(".checkboxes");function i(){r.querySelectorAll(".custom-checkbox").forEach((e=>{t[e.dataset.group]=e.checked}))}function s(){o.useFilter("group",t),o.useSort(e.value),o.render()}i(),s(),e.addEventListener("change",s),r.addEventListener("click",(t=>{t.target.classList.contains("custom-checkbox")&&(i(),s())}))})();const n=document.querySelector(".modal-wrapper");document.querySelector(".add-photo").addEventListener("click",(()=>{console.log("click"),n.classList.toggle("modal-wrapper_active")}))}()}();