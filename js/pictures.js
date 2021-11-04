const photoUnit = document.queryselector('.pictures');
const photoTemplate = document.queryselector('#picture').content;


const publishPhoto = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const viewPhoto = photoTemplate.cloneNode(true);
    viewPhoto.querySelector('.picture__likes').textContent = photo.likes;
    viewPhoto.querySelector('.picture__comments').textContent = photo.comments;
    viewPhoto.querySelector('.picture__img').src = photo.url;
    pictureFragment.appendChild(viewPhoto);
  });
  photoUnit.appendChild(pictureFragment);
};


export {photoTemplate, photoUnit, publishPhoto};

