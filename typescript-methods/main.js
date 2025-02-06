'use strict';
const heroes = ['Green Lantern', 'Dr. Manhattan', 'Superman', 'Iron Man'];
let randomNumber = Math.random();
console.log('random number, should be between 0 and 1', randomNumber);
randomNumber = randomNumber * heroes.length;
console.log('random number multiplied by array length', randomNumber);
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex value: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('random Hero: ', randomHero);
const library = [
  { title: 'The Unfettered Mind', author: 'Takuan Soho' },
  { title: 'Linear Algebra Done Right', author: 'Sheldon Axler' },
  { title: 'The Lost Book', author: 'unknown' },
];
const lastBook = library.pop();
console.log('Last Book: ', lastBook);
const firstBook = library.shift();
console.log('First Book: ', firstBook);
console.log('library after pop and shift: ', library);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('new Library:', library);
const fullName = 'Joe Park';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('say my name: ', sayMyName);
// interface Employee {
//   name: string;
//   age: number;
//   position: string;
// }
const employee = { name: 'Bub', age: 30, position: 'grunt' };
const employeeKeys = Object.keys(employee);
console.log('Employee Keys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Employee Values: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee pairs: ', employeePairs);
