/*
If else statement is used to take decisions.
 */

const name = 'Sarah';
const age  = 18;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`${name} can start driving license 🚗`);
}


// more example
const username = 'tahazzot';
const password = '123'; // most secure password in the world :) suppose

if ( username === 'tahazzot' && password === '123' ) {
    console.log('Authentication success');
} else {
    console.log('Something went wrong!');
}

// another example
const day = 4;
let today;

// 0 = sunday, 1 = monday ...
if (day === 0) {
   today = 'sunday';
} else if (day === 1 ) {
    today = 'monday';
} else if (day === 2) {
    today = 'tuesday';
} else if (day === 3 ){
    today = 'wednesday';
} else if (day === 4 ) {
    today = 'thursday';
} else if (day === 5 ) {
    today = 'friday';
} else if (day === 6) {
    today = 'saturday';
} else {
    today = 'unknown day';
}

console.log(today);
