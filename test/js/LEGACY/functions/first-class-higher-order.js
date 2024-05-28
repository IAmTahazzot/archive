/*
  First-Class Functions
------------------------------------------------------------------------
JavaScript treats functions as first-class citizens
This means that functions are simply values
Functions are just another 'type' of object

  Higher-Order Functions
-----------------------------------------------------------------------

A function that 'receives' another function as an argument or that 'returns' a
new function, or both.
*/

const oneWord = (text) => text.replace(/ /g, '').toLowerCase();

const upperFirstLetter = (text) => {
  /*
    SOLUTION 1:
    const [first, ...others] = text.split(' ');
    return [first.toUpperCase, ...others].join(' ');
  */

  /*
   SOLUTION 2:
   const words = text.split(' ');
   return words[0].toUpperCase() + ' ' + words.slice(1).join(' ');
  */
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const upperFirstWord = (text) => {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (text, fn) {
  console.log(`Transformed by: ${fn.name} function!`);
  return fn(text);
};

// console.log(transformer('javascript is beautiful', upperFirstWord));
// console.log(transformer('javascript is beautiful', upperFirstLetter));

// More about return function from an function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} Mr. ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} Mr. ${name}`);

greet('Hello')('Tahazzot');
greet('Hi')('Smith');
