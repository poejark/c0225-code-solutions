const heroes: string[] = [
  'Green Lantern',
  'Dr. Manhattan',
  'Superman',
  'Iron Man',
];
let randomNumber: number = Math.random();
console.log('random number, should be between 0 and 1', randomNumber);
randomNumber = randomNumber * heroes.length;
console.log('random number multiplied by array length', randomNumber);
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex value: ', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('random Hero: ', randomHero);

interface book {
  title: string;
  author: string;
}

const library: book[] = [
  { title: 'The Unfettered Mind', author: 'Takuan Soho' },
  { title: 'Linear Algebra Done Right', author: 'Sheldon Axler' },
];

const lastBook = library.pop();
console.log('Last Book: ', lastBook);
const firstBook = library.shift();
console.log('First Book: ', firstBook);

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
library.splice(1);
console.log(library);

const fullName: string = 'Joe Park';
const firstAndLastName: string[] = fullName.split(' ');
console.log(firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('say my name: ', sayMyName);

// interface Employee {
//   name: string;
//   age: number;
//   position: string;
// }

const employee = { name: 'Bub', age: 30, position: 'grunt' };

const employeeKeys: string[] = Object.keys(employee);
console.log('Employee Keys: ', employeeKeys);

const employeeValues: any[] = Object.values(employee);
console.log('Employee Values: ', employeeValues);

const employeePairs: any[] = Object.entries(employee);
console.log('Employee pairs: ', employeePairs);
