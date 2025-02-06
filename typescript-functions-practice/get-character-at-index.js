'use strict';
/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index) {
  if (string.length <= index) {
    return 'string index mismatch.';
  }
  return string[index];
}
