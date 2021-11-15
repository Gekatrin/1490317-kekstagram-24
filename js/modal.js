import {escapeKey} from './utils.js';


const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const bigPictureUrl = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentCount= bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const imageFragment = document.createDocumentFragment();

const onBigImageEscKeydown = (evt) => {
  if (escapeKey (evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onButtonCloseClick = () => {
  closeBigPicture();
};

function showBigPicture () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onBigImageEscKeydown);
  closeButton.addEventListener('click', onButtonCloseClick);

  socialComments.innerHTML = '';
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigImageEscKeydown);
  closeButton.removeEventListener('click', onButtonCloseClick);
}

const showPostPreview = (({url, likes, comments, description}) => {
  bigPictureUrl.querySelector('img').setAttribute('src', url);
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
  socialCaption.textContent = description;

  comments.forEach(({avatar, name, message}) => {
    const imageElement = socialComment.cloneNode(true);
    imageElement.querySelector('.social__picture').setAttribute('src', avatar);
    imageElement.querySelector('.social__picture').setAttribute('alt', name);
    imageElement.querySelector('.social__text').textContent = message;

    imageFragment.appendChild(imageElement);
  });
  socialComments.appendChild(imageFragment);
});

export {showPostPreview, showBigPicture};
