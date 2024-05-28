// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Not Empty'));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should get a job!');
}

let height = 1.78; // In meter :)

if (height) {
  console.log('Yah, You have height :) congrats ');
} else {
  console.log('Height is not defined');
}
