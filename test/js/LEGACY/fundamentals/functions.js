// A function is a "Chunk" of code that can use over and over again, rather than writing it out multiple times. Function enables programmers to break down or decompose a problem into smaller chunk, each of which performs a perticular task.

function logger() {
  console.log('My name is Tahazzot');
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const result = fruitProcessor(5, 0);
console.log(result);

// Calling function from another function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitBlender(apples, oranges) {
  const piecesApples = cutFruitPieces(apples);
  const piecesOranges = cutFruitPieces(oranges);

  return `A Juice with ${piecesApples} pieces of Apples and ${piecesOranges} pieces of Oranges!`;
}

console.log(fruitBlender(4, 1));
