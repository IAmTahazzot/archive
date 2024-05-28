# Hoisting

Hoisting: Makes some types of variables accessible/ usable in the code before
they are actually declared. "Variables lifted to the top of their scope".

BEHIND THE SCENES

Before execution, code is scanned for variable declarations and for each
variable, a new property is created in the variable environment object.

## Where & How it works

| Type                          | Is hoisted?         | Initial Value      | Scope    |
|-------------------------------|---------------------|--------------------|----------|
| Function Declaration          | Yes                 | Actual Function    | Block    |
| `var`                         | Yes                 | `undefined`        | Function |
| `let, const`                  | ~~Yes~~, No         | uninitialized, TDZ | Block    |
| function expressions & arrows | Depends on variable |                    |          |

## Example:

```js
const city = 'Albany';
const state = 'NewYork';

if (state === 'NewYork') {
    console.log(`I live in ${city}, ${country}`);
    
    const country = 'USA'; // Temporal Dead Zone (TDZ)
}
```

Function declared with `let` and `const` can't be used before initialization.
Event with `var` it's wouldn't work because var return `undefined` & 
undefined is not a function.

```js
letFunction(); // can't be used before initialization
constFunction(); // can't be used before initialization
varFunction(); // is not a function

let letFunction = () => { console.log('LetFunction'); };
const constFunction = () => { console.log('constFunction'); };
var varFunction = () => { console.log('VarFunction'); };
```