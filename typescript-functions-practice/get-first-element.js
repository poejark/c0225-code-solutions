'use strict';
/* exported getFirstElement */
function getFirstElement(array) {
  if (array.length <= 0) {
    return 'error with argument input. ';
  }
  return array[0];
}
