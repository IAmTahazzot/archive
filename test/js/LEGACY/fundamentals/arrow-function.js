// Arrow Function
// Don't need parentheses if function has only 1 parameter.
const calcAge = (birthYear) => 2022 - birthYear;
console.log(calcAge(2002));

// OR
const calcAge2 = (birthYear) => {
  return 2022 - birthYear;
};

// More
const yearsUntilRetirement = (birthYear) => {
  const yearsLeft = 65 - calcAge(birthYear);
  return yearsLeft > 0 ? yearsLeft : 'Person has been retired!';
};

console.log(yearsUntilRetirement(1800));
