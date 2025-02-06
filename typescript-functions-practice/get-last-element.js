'use strict';
/* exported getLastElement */
function getLastElement(array) {
  if (array.length <= 0) {
    return 'no last element exists';
  }
  return array[array.length - 1];
}
