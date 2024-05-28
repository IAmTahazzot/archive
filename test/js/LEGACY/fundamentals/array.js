// Array can take multiple values at once.

// Array literal (which is a sort form of writing, RECOMENDED)
let friends = ['Michael', 'Jordan', 'Steve', 'Hemsworth', 'Scarlet', 'Witch'];
console.log(friends);

// Array Object
const years = new Array(1991, 1971, 2002, 2022);
console.log(years);

// Array starts from 0 index to infinite...
console.log(years[0]);
console.log(friends[3]);

// Array has a lots of build in methods or functions so called.
console.log(years.length); // shows how many items are there in the an array
console.log(friends[friends.length - 1]); // get last item from the array

friends = friends.concat([
  'new friends names',
  'anothers',
  ['new one here', 'more'],
]); // Concat
console.log(friends);

friends[friends.length - 1] = 'replaced the last friend with this one';
console.log(friends);
