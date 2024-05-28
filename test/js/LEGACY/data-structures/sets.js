const Friends = new Set([
  'Alex',
  'Alex', // duplicate value will not be counted
  'Jonathan',
  'Ali',
  'Stephanie',
  'Scarlet',
]);

console.log(Friends.has('Alex'));
console.log(Friends.delete('Alex'));
console.log(Friends.add('Alexander'));
console.log(Friends.size);

console.log(Friends);

for (let friend of Friends) console.log(friend);

// Remove duplicate value from the array :) Easy one
Object.defineProperty(Array.prototype, 'removeDuplicate', {
  value: function () {
    return [...new Set(this)];
  },
});

console.log(['a', 'b', 'c', 'a', 2, 2, { a: 1 }, { a: 1 }].removeDuplicate());
