// Array methods

let friends = ['Michael', 'Jordan', 'Alex', 'Jay'];

friends = friends.concat(1, 2, 3);
console.log(friends);

friends.push(4);
console.log(friends);

friends.pop();
console.log(friends);

console.log(friends.push('Last friends')); // return the new item length
console.log(friends.length);

const firstFriends = friends.shift();
console.log(friends);
console.log(firstFriends);

friends.unshift(firstFriends);
console.log(friends);

friends = friends.filter((i, l) => (l < friends.length - 4 ? i : null));
console.log(friends);

friends.forEach((value, index, array) => {
  console.log(value, index);
});

const mI = friends.indexOf('Michael');
console.log(mI);

console.log(friends.lastIndexOf('Michael'));
console.log(friends.includes('Bob'));
console.log(friends.includes('Michael'));

console.log(friends.indexOf('Jordan'));

const nArray = [1, 2, 3, 4, 5, 6];
nArray.fill('New value', 0, 2);
console.log(nArray);
