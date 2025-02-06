/* exported getElementAtIndex */
function getElementAtIndex(array: any[], index: number): any {
  if (array.length <= index - 1) {
    return 'array length does not match the index';
  }
  return array[index];
}
