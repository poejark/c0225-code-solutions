/* exported getPropertyValue */

function getPropertyValue(object: object, key: string): any {
  // const keyVal: string = key;
  return object[key as keyof object];
}
