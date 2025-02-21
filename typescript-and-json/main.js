'use strict';
const shelf = [
  { isbn: '123', title: 'book1', author: 'author1' },
  { isbn: '1234', title: 'book2', author: 'author2' },
  { isbn: '12345', title: 'book3', author: 'author3' },
];
const shelfString = JSON.stringify(shelf);
console.log('JSON string of book array: ', shelfString);
const student = '{"id": 123, "name": "author"}';
console.log('type of student JSON string: ', typeof student);
console.log('student string: ', student);
const studentJSON = JSON.parse(student);
console.log('student JSON object: ', studentJSON);
console.log('type of student JSON object: ', typeof studentJSON);
