'use strict';
/* exported getSecondElement */
function getSecondElement(array) {
  if (array.length <= 1) {
    return 'no second element exists';
  }
  return array[1];
}
