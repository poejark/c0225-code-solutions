'use strict';
const student = {
  firstName: 'Joe',
  lastName: 'Park',
  age: 25,
};
const fullName = student.firstName + ' ' + student['lastName'];
console.log('Fullname of student object: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('Student lives in Irvine: ', student.livesInIrvine);
console.log("student's previous occupation: ", student.previousOccupation);
console.log('Student Object: ', student);
console.log('Type of Student Object: ', typeof student);
const vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2024,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('vehicle color:', vehicle['color']);
console.log('is vehicle convertible? ', vehicle['isConvertible']);
console.log(`bracket notation with string interpolation ${vehicle['color']}`);
console.log('Type of vehicle: ', typeof vehicle);
const pet = {
  name: 'Coco',
  kind: 'Dog',
};
delete pet.name;
delete pet['kind'];
console.log('value of pet: ', pet);
console.log('Type of pet: ', typeof pet);
