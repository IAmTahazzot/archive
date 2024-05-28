/**
 * @variable
 * variable store different kind of values. So, it's a data store house.
 *
 * We declare variable in javascript 3 different ways:
 *
 * ES5 & Earlier (not recommended)
 * - var: readable + writable
 *
 * ES6 & Later (recommended)
 * - let: block scope, readable + writable
 * - const: block scope, readable only
 *
 * @naming
 * Reserved keyword is forbidden, Should start with _, $ or Letters (A-Z, a-z)
 * numbers (0-9) is also allowed only after 1st char.
 */

var name = 'Tahazzot';
const username = 'iamtahazzot';

{
    let city = 'Dhaka';
}

// username couldn't be change
username = 'newusername'; // will throw an error
console.log(name, username, city); // city will be undefined as let is block
// scope
