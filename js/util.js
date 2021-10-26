import {description, names, messages} from './data.js';

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

export {getRandomNumber, stringLength, generatePhoto, getPhotos};
