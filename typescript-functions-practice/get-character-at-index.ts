/* exported getCharacterAtIndex */
function getCharacterAtIndex(string: string, index: number): string {
  if (string.length <= index) {
    return 'string index mismatch.';
  }
  return string[index];
}
