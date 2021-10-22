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


const DESCRIPTION = [
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

const NAMES = [
  'Артем',
  'Маша',
  'Олег',
  'Лена',
  'Саша',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const keksObject = (id) => {
  const randomDescriptionIndex = getRandomNumber(0, DESCRIPTION.length - 1);
  const randomLikesCount = getRandomNumber(15, 200);
  const comments = [];
  const randomCommentsNumber = getRandomNumber(1, 5);

  for (let index = 0; index < randomCommentsNumber; index++) {
    const randomCommentsId = getRandomNumber(0, 200);
    const randomAvatarIndex = getRandomNumber(1, 6);
    const randomMessagesIndex = getRandomNumber(0, MESSAGES.length - 1);
    const randomNamesIndex = getRandomNumber(0, NAMES.length - 1);
    comments.push({
      id: randomCommentsId,
      avatar: `img/avatar-${randomAvatarIndex}.svg`,
      message: MESSAGES[randomMessagesIndex],
      name: NAMES[randomNamesIndex],
    });
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    avatar: `img/avatar-${id}.svg`,
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomLikesCount,
    comments: comments,
  };
};

function getPhotos() {
  const photos = [];
  for (let index = 1; index <= 25; index++) {
    const photo = keksObject(index);
    photos.push(photo);
  }
  return photos;
}
export { getPhotos };


