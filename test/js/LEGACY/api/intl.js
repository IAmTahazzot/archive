const num = 76.58;
const options = {
  style: "unit",
  unit: "mile-per-hour"
}

console.log('US:'.padEnd(15, ' ') + new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:'.padEnd(15, ' ') + new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:'.padEnd(15, ' ') + new Intl.NumberFormat('ar-SY', options).format(num));
console.log('Bangladesh'.padEnd(15, ' ') + new Intl.NumberFormat('bn-BD', options).format(num));