import {getRandomNumber} from './utils.js';

const description = [
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

const names = [
  'Артем',
  'Маша',
  'Олег',
  'Лена',
  'Саша',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generatePhoto = (id) => {
  const randomDescriptionIndex = getRandomNumber(0, description.length - 1);
  const randomLikesCount = getRandomNumber(15, 200);
  const comments = [];
  const randomCommentsNumber = getRandomNumber(1, 5);

  for (let index = 0; index < randomCommentsNumber; index++) {
    const randomCommentsId = getRandomNumber(0, 200);
    const randomAvatarIndex = getRandomNumber(1, 6);
    const randomMessagesIndex = getRandomNumber(0, messages.length - 1);
    const randomNamesIndex = getRandomNumber(0, names.length - 1);
    comments.push({
      id: randomCommentsId,
      avatar: `img/avatar-${randomAvatarIndex}.svg`,
      message: messages[randomMessagesIndex],
      name: names[randomNamesIndex],
    });
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    avatar: `img/avatar-${id}.svg`,
    description: description[randomDescriptionIndex],
    likes: randomLikesCount,
    comments: comments,
  };
};

function getPhotos() {
  const photos = [];
  for (let index = 1; index <= 25; index++) {
    const photo = generatePhoto(index);
    photos.push(photo);
  }
  return photos;
}


export {description, names, messages, generatePhoto, getPhotos};
