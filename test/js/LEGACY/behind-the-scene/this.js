/*
this keyword/ variable: Special variable that is created for every execution context(every function) Takes the value of (points to) the "Owner" of the function in which the this keyword is used.

this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

Method -> this = <Object that is calling the method>
Simple function call -> this = undefined (IN strict mode! otherwise window)
Arrow function -> this = <this of surrounding function (lexical this)>
Event listener -> this = <DOM element that the handler is attached to>
new, call, apply, bind - :) later
*/

'use strict';

const aSimpleFunction = function () {
  console.log(this);
};

const anArrowFunction = () => {
  console.log(this);
};

const person = {
  name: 'Tahazzot',
  about: function () {
    console.log(this.name);
  },
};

console.log(this); // window (normal global this keyword)
anArrowFunction(); // window (use the lexical this keyword)
aSimpleFunction(); // undefined (only in strict mode otherwise global this)
person.about(); // Tahazzot (this refer to the Object which is calling it)
