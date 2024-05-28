const ages = [21, 19, 17, 20, 13, 28, 19];
const adults = ages.filter( value => value >= 18 );

console.log(adults);

// Let's build a even and Odd number checker... using the filter method :) fun isn't it?
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EVENS = numbers.filter(checkEven);

function checkEven(value, index, array) {
  if ( !(value % 2)) {
    return 'Even';
  }
}

console.log(EVENS);