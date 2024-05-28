// 7 Primitives data types
// String, Number, Boolean, Undefined, Null, BigInt, Symbol

// JavaScript has dynamic typing: we do not need to define any data types in a variable. It's automatically happend by interpreter.

let JavascriptIsFun = true; // Boolean
console.log(JavascriptIsFun);

if (JavascriptIsFun) {
    console.log('JavaScript is so fun!')
}

console.log(typeof(true))
console.log(typeof('Hello World'));
console.log(typeof(34));
console.log(typeof(34.33));
console.log(typeof(undefinedVariable));
console.log(typeof(undefined));
console.log(typeof(JavascriptIsFun));
console.log(typeof(null));
console.log(null);

// typeof brackets can be ignored like below:
console.log(typeof 'A String');
console.log(typeof unknownVariable);

// Let's mutate the first variable we craeted.
console.log(typeof JavascriptIsFun);

// Mutating now...
JavascriptIsFun = 'Yes it is fun';
console.log(typeof JavascriptIsFun); // changed to string automatically

// Let's make another example
let year; // now it is undefined because we didn't assigned any value here.
console.log(typeof year); //it's undefined

year = 1991;
console.log(typeof year); //now it's number