/*
@Falsy
@Truthy

There are several falsy values in javascript:
- ''
- 0, -0
- 0n (bigint 0, there is no negative bigint 0)
- undefined
- null
- NaN
- document.all

Everything else if truthy value.
 */

console.log(Boolean(undefined))

let x; // x is undefined

if (x) { // undefined will convert to boolean value
    // unreachable code ;)
}

x = ''; // empty string is also falsy value

if (x) { // '' (empty string) will convert to boolean value
    // unreachable code ;)
}

// same applies for all the falsy values including document.all
// this dom object has nothing to do with javascript
