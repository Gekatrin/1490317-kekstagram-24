function getRandomNumber(min, max) {
  if (max>=0 && min>=0 && min<max){
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    return null;
  }
}
getRandomNumber(1, 100);
//источник https://schoolsw3.com/js/js_random.php
function stringLength (value, maxLength) {
  if(value.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

stringLength ('Test', 10);
//источник http://kodesource.top/javascript/form/string-length.php

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const url = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
let description = [
  'пляж',
  'указатель',
  'залив',
  'девушка',
  'суп',
  'спорткар',
  'клубника',
  'морс',
  'самолет и девушка',
  'обувница',
  'дорожка',
  'белая ауди',
  'салат',
  'котик суши',
  'роботапки',
  'высота',
  'симфонический концерт',
  'ретро автомобиль',
  'светотапки',
  'пальмы',
  'китайская еда',
  'закат',
  'краб',
  'рок концерт',
  'сафари',
];

const likes = (min, max) => {
  if (max>=0 && min>=0 && min<max){
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    return null;
  }
};
likes(15, 200);

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};


const comments = [
  {id: 135, avatar: 'img/avatar-6.svg', message: 'Всё отлично!', name: 'Артём'},
  {id: 135, avatar: 'img/avatar-6.svg', message: 'В целом всё неплохо. Но не всё.', name: 'Артём'},
  {id: 135, avatar: 'img/avatar-6.svg', message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', name: 'Артём'},
  {id: 135, avatar: 'img/avatar-6.svg', message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', name: 'Артём'},
  {id: 135, avatar: 'img/avatar-6.svg', message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', name: 'Артём'},
  {id: 135, avatar: 'img/avatar-6.svg', message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', name: 'Артём'},
];
