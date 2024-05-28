/*

Spread operator assigned after equal(=) sign
Only works with iterable values such as
    - string
    - number
    - set
    - array
    - map
    Object only works inside object extraction
 */

const x = [1, 2, 3, 4, 5];
const y = [...x, 6, 7, 8]; // spread operator

// or with functions
function sum( ...n /* rest parameter */) {
    return n.reduce( (acc, next) => acc + next );
}

console.log(
    sum(...y) // spread operator
);
