/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  }
  return false;
}

const isEven = (number: number): boolean => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}

interface Person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

const isOldEnoughToDrive = (person: Person): boolean => {
  if (person.age >= 16) {
    return true;
  }
  return false;
};

const isOldEnoughToDrinkAndDrive = (person: Person): boolean => {
  if (person) {
    return false;
  }
  return false;
};

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko' || 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

const recommendMovie = (genre: string): string => {
  switch (genre) {
    case 'action':
      return 'Inception';
    case 'comedy':
      return 'Parasite';
    case 'horror':
      return 'Scary Movie 5';
    case 'drama':
      return 'Train to Busan';
    case 'musical':
      return 'Le Miserables';
    case 'scie-fi':
      return "Ender's Game";
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
