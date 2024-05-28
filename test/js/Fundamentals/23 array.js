/*
Array can take multiple types of values at once. VERY VERY IMPORTANT!!!!!!

ITS SUPER POWERFUL
 */

const shopList = ['Rice', 'Meat', 'Milk', 'Vegetable', 'Fish'];
const friends  = new Array('Alex', 'Peter', 'John');

//  multiple types at once
const list = [
    'a string',
    7,
    () => 2 + 2, // an arrow function inside an array !
    {
        name: 'Tahazzot',
        age: 20
    }, // an object inside an array !
    null,
    undefined,
    NaN,
    false,
    true,
    2 ** 4 % 5, // an expression
];

// accessing array elements
const firstElement = list[0]; // in programming general counting start from 0
console.log(firstElement)

