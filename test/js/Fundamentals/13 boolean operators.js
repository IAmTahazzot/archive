const hasDriverLicense = true;
const hasGoodVision    = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(!hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense || !hasGoodVision); // false
