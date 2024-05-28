console.log( 23 === 23.0 );
console.log( 0.1 + 0.2 === 0.3 );

console.log( 0.1 + 0.7 );
console.log(Number('32'));
console.log(+'32');

console.log(parseInt('30QO3234'));
console.log(parseInt('l323'));
console.log(parseFloat('2.4rem'));
console.log(parseInt('2.34rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(234.2));
console.log(Number.isFinite(+'20x'));

console.log(Number.isInteger(3));
console.log(Number.isInteger(3.3));
console.log(Number.isInteger(+'3'));
console.log(Number.isInteger(3.0000));

// 287,460,000,000
// numeric separetor
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);