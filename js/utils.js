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

export {getRandomNumber, stringLength};
