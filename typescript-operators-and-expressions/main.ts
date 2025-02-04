const width: number = 5;
const height: number = 8;
const area: number = width * height;
console.log('Area: ', area);
console.log('type of area: ', area);

const bill: number = 2;
const payment: number = 5;
const change: number = payment - bill;
console.log('Change: ', change);
console.log('Type of change: ', typeof change);

const quizzes: number = 70;
const midterm: number = 80;
const final: number = 100;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Grade: ', grade);
console.log('type of Grade: ', typeof grade);

const firstName: string = 'Joe';
const lastName: string = 'Park';
const fullName: string = firstName + ' ' + lastName;
console.log('Full name: ', fullName);
console.log('Type of Full Name: ', typeof fullName);

const pH: number = 5;
const isAcidic: boolean = pH < 7;
console.log('isAcidic value: ', isAcidic);
console.log('Type of isAcidic variable: ', typeof isAcidic);

const headCount: number = 250;
const isSparta: boolean = headCount === 300;
console.log('is this Sparta?', isSparta);
console.log('Type of isSparta: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('motto: ', motto);
console.log('type of motto: ', typeof motto);
