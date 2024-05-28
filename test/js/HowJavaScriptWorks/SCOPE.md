# Scope

In general JavaScript has 3 scopes:

- Global
- Function
- Block

## Notes

- Scoping asks the question 'Where do variables live?' or 'WHere can we 
  access a certain variable, and where not?'
- There are 3 types of scope in JavaScript Global, Functions & Blocks
- Only `let` and `const` variables are block-scoped. Variables declared with 
  `var` end up in the closest function scope.
- In JavaScript, We have lexical scoping, so the rules of where we can 
  access variables are based on exactly where in the code functions are 
  blocks are written.
- Every scope always has access to all the variables from all its outer 
  scopes. This is the scope chain!
- When a variable is not in the current scope, the engine looks up in the 
  scope chain until it finds the variable it's looking for. This is called 
  variable lookup.
- The scope chain is a one-way street: a scope will never, ever have access 
  to the variables of an inner scope.
- The scope chain in a certain scope is equal to adding together all the 
  variable environments of the all parent scopes.
- The scope chain has nothing to do with the order in which functions were 
  called. It does not affect the scope chain at all!

## Scope Chain & EC Order

> Order in which functions are witten in the code has nothing to do with order in which functions were called!

```js
const country = 'USA';

function first() {
    const state = 'NewYork';
    second();
    
    function second() {
        const city = 'Albany';
        third();
    }
}

function third() {
    const address = '222 Madison Ave, Albany, NY 12230, United States';
    console.log(country, state, city, address);
}

first(); // Reference error (state & city is not defined)
```
