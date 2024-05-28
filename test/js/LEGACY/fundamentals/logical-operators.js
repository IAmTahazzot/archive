const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(hasDriversLicense && !hasGoodVision); // true

console.log(!hasDriversLicense); // inverts to false

// More examples
const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  // Logic can be also used here
  console.log('You are able to drive car, Congrats!');
} else {
  console.log('Someone else should drive!');
}

const isTired = true; // C
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('You should take some rest first then drive again!');
} else {
  console.log('Yah, CHill, you can drive here now.');
}
