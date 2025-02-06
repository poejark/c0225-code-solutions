'use strict';
/* exported getLastCharacter */
function getLastCharacter(string) {
  if (string.length <= 0) {
    return 'no last character exists';
  }
  return string[string.length - 1];
}
