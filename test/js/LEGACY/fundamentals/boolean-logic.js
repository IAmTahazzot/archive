// AND (Will return true if all values are true)
// OR (Will return true only if one value is true & return false if none of them are true)
// ! Not operator inverts the value

const age = 18;

if (age > 10 && age === 18) {
  console.log("It's true");
}

if (age >= 18 || age < 18) {
  console.log('Only first condition is true so the whole action will be true');
}

// null, undefined, '', 0, NaN is falsy value
// but here age is truthy because it's not falsy
// But we inverts the value using not (!) operator that becomes falsy
if (!age) {
  console.log(typeof age);
}
