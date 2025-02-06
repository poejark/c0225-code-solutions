'use strict';
/* exported getSecondCharacter */
function getSecondCharacter(string) {
  if (string.length <= 1) {
    return 'no second character exists';
  }
  return string[1];
}
