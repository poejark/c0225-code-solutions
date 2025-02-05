'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(
  'Convert minutes to Seconds for a 10 minute argument',
  convertMinutesToSeconds(10)
);
const greet = (name) => {
  return `Hey ${name}!`;
};
console.log('greet with argument Joe', greet('Joe'));
const getArea = (width, height) => {
  return width * height;
};
console.log('Get Area of w:4 h:8: ', getArea(4, 8));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'Get First name of person object: ',
  getFirstName({ firstName: 'Joe', lastName: 'Park' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'Get Last Element of a list: ',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
function callOtherFunction(otherFunction, ...params) {
  return otherFunction(...params);
}
console.log('calculate area function call', callOtherFunction(getArea, 8, 5));
console.log(
  'getLast Element from callOtherFunction: ',
  callOtherFunction(getLastElement, [1, 2, 3, 'last'])
);
