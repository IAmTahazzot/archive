// Base 10 (between 0 and 9)
// Binary Base 2 (between 0 and 1)

console.log( Number.parseInt('2.5px', 10) ); // 10 base (2nd arg ?)
console.log( Number.parseFloat( '2.5435px') );

console.log( Number.isFinite(10 / 0)); // best way to check if it's a number
console.log( Number.isNaN('not a number')); // check if Not A Number (NaN)
console.log( Number.isInteger(2.3)); // check if it's an integer
console.log( Number.isSafeInteger(2 ** 53));

console.log( +'230' ); // will convert into number


// Math has a lot of functions to work with (don't need right now)
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.2)); // 2

console.log(Math.ceil(2.1)); // 3
console.log(Math.ceil(2.5)); // 3

console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.5)); // 2

console.log(40.5002.toFixed(2)); // [NOTE] toFixed returns a string


