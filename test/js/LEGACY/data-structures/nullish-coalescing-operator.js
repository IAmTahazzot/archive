// Nullish: null and undefined (NOT 0 or "")
// Almost same as NULL but only stop with null & undefined value
const guest = 0;
const howManyGuest = guest ?? 10;
console.log(howManyGuest);
