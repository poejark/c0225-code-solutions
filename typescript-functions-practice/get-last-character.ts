/* exported getLastCharacter */
function getLastCharacter(string: string): string {
  if (string.length <= 0) {
    return 'no last character exists';
  }
  return string[string.length - 1];
}
