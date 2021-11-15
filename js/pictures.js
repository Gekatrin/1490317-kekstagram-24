import {showPostPreview, showBigPicture} from './modal.js';

const photoUnit = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const pictureFragment = document.createDocumentFragment();

const publishPhoto = (photos) => {
  // const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const viewPhoto = photoTemplate.cloneNode(true);
    viewPhoto.querySelector('.picture__likes').textContent = photo.likes;
    viewPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
    viewPhoto.querySelector('.picture__img').src = photo.url;
    pictureFragment.appendChild(viewPhoto);
  });
  photoUnit.appendChild(pictureFragment);
};

const showUserPost = (optionImage) => {
  showBigPicture();
  showPostPreview(optionImage);
};

const openModalWindow = (image) => {
  image.forEach((item) => {
    const thumbnailElement = publishPhoto(item);
    photoUnit.append(thumbnailElement);
  });
  photoUnit.addEventListener('click', (evt) => {
    const optionImage = image.find((element) => element.id === +evt.target.dataset.id);
    if(!optionImage) {
      return;
    }
    showUserPost(optionImage);
  });
};
export {photoTemplate, photoUnit, publishPhoto, openModalWindow};


