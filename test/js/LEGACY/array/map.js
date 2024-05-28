const MOVEMENTS = [200, -120, 07, 920, -34, 5000, -320, 100, 83];
const EUROTOUSD = 1.1;

const movementsUSD = MOVEMENTS.map(mov => Math.floor(mov * EUROTOUSD));
console.log(movementsUSD);
console.log(MOVEMENTS);

