'use strict';
/* exported getElementAtIndex */
function getElementAtIndex(array, index) {
  if (array.length <= index - 1) {
    return 'array length does not match the index';
  }
  return array[index];
}
