const age = 23;
age >= 18
  ? console.log('I like to drink wine')
  : console.log('I would like to drink water only!');

// Above statement has a ternary conditions that works without being describe in a carly barcks. quite easy and smooth isn't it?

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

// Alternative in If else statement but heavy code here...
let drink2;
if (age >= 18) {
  drink2 = 'Wine';
} else {
  drink2 = 'Water';
}
console.log(drink2);
