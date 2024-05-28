'use strict';

const fruits = ['Orange', 'Mango', 'Orange', 'Berry', 'Mango', 'Pineapple', 'Banana'];

const uniqueFruits = fruits.reduce(function(acc, curr) {

  // GUARD
  if (acc.includes(curr)) return acc;
  acc.push(curr);
  return acc;
}, []);



if (!Array.prototype.unique) {
  Array.prototype.unique = function() {
    return [...new Set(this)];
  };
}

console.log(uniqueFruits);
console.log(fruits.unique());