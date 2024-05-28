const firstName = 'Tahazzot';
const job = 'Software Engineer';
const birthYear = 2002;

// Old way
const stringConcat =
  "I'm " +
  firstName +
  ', a ' +
  (new Date().getFullYear() - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(stringConcat);

// Modern way
const templateLiteral = `I am ${firstName}, a ${
  new Date().getFullYear() - birthYear
} years old ${job}!`;
console.log(templateLiteral);

// Strings
// old way
const name = 'I am \n\
Tahazzot \n\
Islam';
console.log(name);

// modern way
const myName = `I am
Tahazzot
Islam`;
console.log(myName);
