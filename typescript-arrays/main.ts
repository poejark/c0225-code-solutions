const colors: string[] = ['red', 'white', 'blue'];
console.log('first color:', colors[0]);
console.log('second color:', colors[1]);
console.log('third color:', colors[2]);

console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';

console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

console.log('value of the colors array: ', colors);
console.log('Type of colors array: ', typeof colors);

const students: string[] = ['Joe', 'Kyle', 'Mike', 'Ryan'];
const numberOfStudents: number = students.length;
console.log('Number of students: ', numberOfStudents);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log('The Last Student: ', lastStudent);
console.log('student array:', students);
console.log('Type of Students: ', typeof students);
