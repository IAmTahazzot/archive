'use strict';

const username = 'Tahazzot';
const profession = 'profession'; // just for dynamic property name :)

const Person = {
  // don't need the same property name
  username,
  age: 19,
  [profession]: 'Business Man',

  // Method enhance
  about() {
    return `${this.username} is ${this.age} years old.`;
  },
};

console.log(Person);
console.log(Person.about());
