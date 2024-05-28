/**
 * @let
 * @const
 * @var
 *
 * all these use to define variable followed by variable name.
 * var is not block scope and  <= es2015 (not recommended to use) on the other
 * hand let and const is block scope >= es2016 (recommended)
 *
 * const (constant) is only readable, once you define the value you can't change
 * it.
 */


const date_of_birth = new Date('2002-05-04');

{
    let myName = 'Tahazzot';
}

date_of_birth = 'immutable'; // will throw and error
console.log(myName); // undefined, only visible inside that block.