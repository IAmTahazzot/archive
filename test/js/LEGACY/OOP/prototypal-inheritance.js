'use strict';

// Constructor function
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(new Date().getFullYear() - this.birthYear);
  // };
};

// Prototypes
Person.prototype.calcAge = function() {
  return new Date().getFullYear() - this.birthYear;
};

Person.prototype.species = 'Homo Sapiens'

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const tahazzot = new Person('Tahazzot', '2002');
const matilda  = new Person('Matilda', '2004');

console.log(tahazzot.calcAge());
console.log(matilda.calcAge());
console.log(tahazzot.species);

// __proto__
// Remember that one
console.log(tahazzot.__proto__);
console.log(tahazzot.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Person.prototype); // false
console.log(Person.prototype.isPrototypeOf(tahazzot)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false


console.log(tahazzot.hasOwnProperty('firstName')); // true
console.log(tahazzot.hasOwnProperty('species')); // false
