console.log('hello, world');

const $h1 = document.querySelector('h1');

console.log($h1);

console.dir($h1);

const $explanation = document.querySelector('#explanation');

console.log($explanation);

console.dir($explanation);

const $hint = document.querySelector('.hint');

console.log($hint);

console.dir($hint);

const values: NodeList = document.querySelectorAll('p');

console.log(values);

console.dir(values);

const $example: NodeList = document.querySelectorAll('.example-link');

console.log($example);
console.dir($example);
