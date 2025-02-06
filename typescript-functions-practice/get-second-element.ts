/* exported getSecondElement */
function getSecondElement(array: any[]): any {
  if (array.length <= 1) {
    return 'no second element exists';
  }
  return array[1];
}
