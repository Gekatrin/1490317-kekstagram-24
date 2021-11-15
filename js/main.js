import './utils.js';
import './data.js';
import {getPhotos} from './data.js';
import {photoTemplate, photoUnit, publishPhoto, openModalWindow} from './pictures.js';


publishPhoto(getPhotos());
