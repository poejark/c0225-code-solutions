/* exported getFirstCharacter */
function getFirstCharacter(string: string): string {
  if (string.length <= 0) {
    return 'no first character exists';
  }
  return string[0];
}
