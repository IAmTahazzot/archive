/**
#Type

Type conversation is a way to change a data type to another, not all type can
be changed to others.

Type Coercion is same as conversation it happens implicitly.
*/


// TYPE CONVERSATION

// string to number
console.log( typeof Number('234') );
console.log( '2' + 2 );
console.log( '2' - 2 ); // only subtraction(-) division(/) and
// multiplication(*) works
// The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
console.log( +'234' );
console.log( -'123' );
console.log( parseInt('0150af') );
console.log( parseFloat( '-3890a0.21')); // takes only first left hand side
// numeric values

// number to string
console.log(typeof String(234) );
console.log(34234 + '');


// boolean to number
console.log( true + 1 ); // type coercion

let age = 20;
console.log('I am Tahazzot & my age is ' + age); // type coercion