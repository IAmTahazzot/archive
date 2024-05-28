// HOF (Higher Order Function)
// FCF (First Class Function)

/*
FCF

- JavaScript treats functions as first-class citizens
- Functions are simply values
- Functions are just another 'type' of object

HOF

- A function that receives another function as an arguments, that return a
 new function, or both.
- This is only possible because of First-Class functions

 */

//// FCF (First Class Function)
const add = (n1, n2) => n1 + n2; // add is function at the same time variable

//// HOF (Higher Order Function)
const HigherOrderFunction = callbackFunc /* function as an arguments */ => {
    callbackFunc(); // calling the callback function
    return () => { /* returning another function */
        // do something...
        console.log('It\'s from returned function.')
    }
};

HigherOrderFunction( function() {
    console.log('My CallBack Function'.toUpperCase());
})();