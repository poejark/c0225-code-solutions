/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen first call: ', getNumbersToTen());
console.log('getNumbersToTen second call', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty first call: ', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty second call: ', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let repeated: string = '';
  let count: number = 1;
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeat the word blam 3 times: ', repeatWord('blam', 3));
console.log('second call blam x3:', repeatWord('blam', 3));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

logEachCharacter('');
logEachCharacter('Joe');
logEachCharacter('small brown dog');

// function doubleAll(numbers: number[]): number[] {
//   const doubled: number[] = [];
//   for (const num of numbers) {
//     doubled.push(num * 2);
//   }
//   return doubled;
// }
function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('double array: ', doubleAll([1, 2, 3, 4, 5]));

function sumArray(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log('sumArray expected value as 45:', sumArray([5, 10, 30]));

function reverseString(str: string): string {
  let reversed: string = '';
  for (const s of str) {
    reversed = s + reversed;
  }
  return reversed;
}
console.log('reverse hello: ', reverseString('hello'));

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(
  'getKeys test: ',
  getKeys({ val1: 'val', val2: 'val', val3: 'val' })
);

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

console.log(
  'getValues test: ',
  getValues({ val1: 'val_1', val2: 'val_2', val3: 'val_3' })
);
