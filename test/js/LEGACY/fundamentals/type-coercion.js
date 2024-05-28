// Type-Coercion
// The way JavaScript change the type of any variables automatically which is so called coercion it doesn't mean reassign

const inputYear = '1991';
console.log(inputYear * 1);
console.log(true + 0);
console.log(true - false);
console.log(false + 0);
console.log('23' - '10' - 2);
console.log('23' + '10' - 1);
console.log('20' / 2);
console.log('2' * '2');
console.log('10' - '3' - '5' + 1 + '3');

// Type Conversion
const birthYear = '2002';
console.log(new Date().getFullYear() - Number(birthYear));
