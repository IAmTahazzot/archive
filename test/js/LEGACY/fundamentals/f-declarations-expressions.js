// Function declarations vs expressions
// when use function keyword followed by a function name it's a declarations
// if we hold a function in a variables it's and expression

// [NOTE] we can only invoke a function declaration before we write. It happens because of hoisting!

// declaration
function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

console.log(calcAge(2002));

// expression
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calcAge(2004));

// arrow function
const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calcAge3(2002));
