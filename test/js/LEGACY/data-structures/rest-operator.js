// Spread operator used on the right side of equal sign
// Rest operator used on the left side of the equal sign
// Rest does not include skiped element

// Kind of :)

// Spread
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest
const [a, b, ...others] = arr;
console.log(a, b, others);

// Objects
const Obj = {
  sat: { status: 'work day' },
  sun: { status: 'work day' },
  mon: { status: 'work day' },
  fri: { status: 'weekend! :) Hurrah.' },
};

const { fri, ...weekdays } = Obj;
console.log(fri);

// Super dynamic function :) Huh? yah
// with rest operator
const add = (...numbers) => {
  console.log(numbers.reduce((a, b) => a + b));
};

add(2, 3);
add(5, 2, 5, 9, 10);
add(9, 10, 0, 1);
add(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
