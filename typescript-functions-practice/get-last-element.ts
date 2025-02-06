/* exported getLastElement */
function getLastElement(array: any[]): any {
  if (array.length <= 0) {
    return 'no last element exists';
  }
  return array[array.length - 1];
}
