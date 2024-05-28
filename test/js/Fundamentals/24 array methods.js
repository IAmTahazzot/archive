/*
Array Methods:
 */

// shopping list
const list = [ 'Eggs', 'Milk', 'Vegetable', 'Fruits' ];

// list.sort();
// console.log(list); // a - z (alphabetical ascending order)

const concatList = list.concat('Pizza');
// console.log(concatList);

list.pop(); // delete last element from array
list.push('Fruits'); // add new element end of the array
list.push('Pineapple')
list.shift(); // delete first element from the array
list.unshift('Eggs'); // add new element beginning of the array

// reduce & reduceRight can be use in many context
// list.map( (value, index, array) => {
//     console.log(value, index, array);
// });

const filterResult = list.filter( (value, index, array) => {
    return value.charCodeAt(0) === 70 ||
           value.charCodeAt(0) === 80; // words start with capital F & P
}); // return passed element only

const everyResult = list.every((value, index, array) => {
    return typeof value === 'string';
}); // return true & false according to the all array element

// console.log(list.indexOf('Fruits')) // return index number of specified element
// return -1 if not found the element

// console.log(list.reverse()); // reverse the order or all elements

//forEach is just a Loop
// list.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

/// includes checks if a certain element is exists in the array or not
/// return true if exists otherwise false
// console.log(list.includes('Fruits'))

/// splice and slice is almost similar
/// slice is just a chunk of array
/// splice is more complex, it can insert and delete element from specified
/// index
// console.log(list.slice(3, 4));

list.splice(2, 0, 'Banana'); // mutate the original array
console.log(list)