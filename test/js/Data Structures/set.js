// no duplicate values
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Potato',
    'Pasta',
    'Pasta', // :)
]);


ordersSet.add('Drink');
ordersSet.delete('Pasta');
// ordersSet.keys()
// ordersSet.has('Potato');
// ordersSet.size; // property will return the length of the SET
ordersSet.clear();

// remove duplicate elements from an array
const arr = ['apple', 'banana', 'apple', 'pineapple', 'apple', 'pineapple'];
Array.prototype.distinct = function( ) {
    return [...new Set(this)];
};
// console.log(arr.distinct());
