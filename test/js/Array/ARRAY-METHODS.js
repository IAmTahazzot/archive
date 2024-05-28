//// Build in array methods testing...
const list = [1, 2, 'beautiful', false];

const map = list.map( function(value, index, array) {
    return array;
} );

const fruitList = ['Banana', 'Apple', 'Pineapple', 'Cherry', 'Mango'];

fruitList.sort(function(a, b) {
    return a < b ? 1 : -1;
});

const filterFruits = fruitList.filter( (value, index, array) => {
    return value.charAt(0).toLowerCase() !== 'c'
});

fruitList.fill('No Fruits');

// console.log(
//     new Array(3).fill('', 0)
// )

const numbers = [27, 0, 39, 10, -69, 70];
const max = numbers.reduce( (acc, val) => acc < val ? val : acc );
// console.log(max);

numbers.forEach((value, index, array) => {
    // console.log(value, index, array);
});

const mySet = new Set();
mySet.add('nice');
mySet.add('nice');
mySet.add('nice2');
console.log(mySet)


















