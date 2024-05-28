# this

this keyword/ variable: Special variable that is created for every execution 
context (every function) Takes the value of (points to) the 'owner' of the 
function in which the `this` keyword is  used.

this is **NOT** static. It depends on how the function is called, and it's 
value is only assigned when the function is actually called.

# How it works

| Scope                    | Value                                                                   |
|--------------------------|-------------------------------------------------------------------------|
| Methods                  | Object that is calling the method                                       |
| Normal Functions         | `undefined` in strict mode & without strict mode `globalThis or window` |
| Arrow Functions          | no `this` keyword. But it use the lexical `this                         |
| Event Listener           | DOM element that the handler attached to                                |
| new, call, apply, bind   | Coming soon :)                                                          |

### Methods

```js
const person = {
    birthYear: 2004,
    calculateAge() {
        return new Date().getUTCFullYear() - this.birthYear; 
        // this keyword up here refers to the person object itself
    },
};

console.log(person.calculateAge()); // 18
```

### Normal Functions

```js
function functionDeclaration() {
    // window object in browser without strict mode
    // undefined with strict mode
    console.log(this); 
}

functionDeclaration();

const functionExpression = function() {
    console.log(this); // same as function declaration
}

functionExpression();
```

### Arrow Functions

```js
const newFunction = () => console.log(this); // lexical this will be used
newFunction();
```

### Event Listeners

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // this refers to button itself
});
```