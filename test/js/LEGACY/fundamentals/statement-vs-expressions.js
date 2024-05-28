// Expression produce value like 9+1=10 or just a number 100 or True
// A Statement doesn't produce value but a piece of code

// Below one is a statement
if (23 > 10) {
  const str = '23 is bigger than 10';
  console.log(str);
}

// For example in String template literal we can only put expression
// We can't use statement inside this literal
console.log(`I'm ${2022 - 2002} years old!`);
