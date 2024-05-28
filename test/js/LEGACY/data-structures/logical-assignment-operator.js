const rest1 = {
  name: 'Carpi',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// Have problem like before with 0 :) fix it with nullish operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish fix the 0's problem :)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// :) && is here
/*
if (rest2.owner) {
    rest2.owner = 'Anonymous';
}
*/
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
