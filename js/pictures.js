import {getPhotos} from './data.js';

const photoUnit = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;


const publishPhoto = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const viewPhoto = photoTemplate.cloneNode(true);
    viewPhoto.querySelector('.picture__likes').textContent = photo.likes;
    viewPhoto.querySelector('.picture__comments').textContent = photo.comments.lengh;
    viewPhoto.querySelector('.picture__img').src = photo.url;
    pictureFragment.appendChild(viewPhoto);
  });
  photoUnit.appendChild(pictureFragment);
};


export {photoTemplate, photoUnit, publishPhoto};

