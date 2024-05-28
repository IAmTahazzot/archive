/*
 Hoisting
------------------------------------------------------------------------

Hoisting: Makes some types of variables accessible/ useable in the code before they are actually declared. "Variables lifted to the top of their scope"

Behind the scenes:
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable envirionment object.
*/
'use strict';

console.log(username); // Undefined
//console.log(birthDate); // Error
//console.log(age); // Error

var username = 'Tahazzot';
const birthDate = new Date('May 4, 2002');
let age = 19;

// Functions
greeting();
// greeting2(); // Error
// greeting3(); // Undefined because var is now top of it's scope which is Undefined

function greeting() {
  console.log('Hi');
}

const greeting2 = function () {
  console.log('Hey there');
};

var greeting3 = function () {
  console.log("It's undefined now");
};
