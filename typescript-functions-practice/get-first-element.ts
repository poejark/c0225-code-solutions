/* exported getFirstElement */
function getFirstElement(array: any[]): any {
  if (array.length <= 0) {
    return 'error with argument input. ';
  }
  return array[0];
}
