import './utils.js';
import './data.js';
import {getPhotos} from './data.js';
import {publishPhoto} from './pictures.js';

publishPhoto(getPhotos());
