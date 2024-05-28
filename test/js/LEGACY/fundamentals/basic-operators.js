// SUBSTRACTION
const thisYear = new Date().getFullYear();
const ageTahazzot = thisYear - 2002;
const ageSarah = thisYear  - 2005;

console.log(ageTahazzot);
console.log(ageSarah);

// ADDITION
const rent = 150;
const foods = 100;
const vehicle = 20;
const total = rent + foods + vehicle;

console.log(total);

// String Concatanation
const firstName = 'Tahazzot';
const lastName = 'Hossain';
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

// DIVITIONS
const number1 = 100;
const number2 = 5;
const devide = number1 / number2;

console.log(devide); // 20

// MULTIPLICATIONS
const num1 = 5;
const num2 = 10;
console.log(5 * 10);

// POWERs
console.log(2 ** 4); // 4 is the power of 2

// ReASSIGN
let x = 10;
// x = x + 1;
x += 1; // it's better than x = x + 1;
console.log(x);

x *= 2; // is equalivant of x = x * 2;
console.log(x); // 22

// Increment & Decrement (pre and post)
x++; // post increment
console.log(x);

x--;
x--; // post decrement
console.log(x);

// COMPARISON operators
console.log(ageTahazzot > 18); // TRUE
console.log(ageSarah >= 18); // FALSE
