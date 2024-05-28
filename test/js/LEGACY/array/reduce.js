let num = new Array(100).fill(0).map((_, index) => ++index);

// what is 1+2+3...+100?
const SUMOF1TO100 = num.reduce((prev, curr, index, arr) => {
  return prev + curr;
});

console.log(SUMOF1TO100);

const numbers = [99, 100, 200, 34, 20, 1, -100];

// highest number is 80
// lowest number is 1

const lowestNumber = numbers.reduce(lowsetNumberCallback);
const highestNumber = numbers.reduce(highestNumberCallback);

function lowsetNumberCallback( acc, curr ) {
  return acc < curr ? acc : curr;
};

function highestNumberCallback ( acc, curr ) {
  return acc > curr ? acc : curr;
}

console.log(lowestNumber);
console.log(highestNumber);
