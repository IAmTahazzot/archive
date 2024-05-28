// Maps key could be almost anything...
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 9)
  .set('close', 21)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(1));

const NOW = 22;
//console.log(rest.get(NOW < rest.get('close') || NOW > rest.get('open')));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question.get('question'));
for (const [number, value] of question) {
  if (typeof number === 'number') console.log(`${number}: ${value}`);
}

const answer = 5;
console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
console.log([...question]);

// Convert Array to Map
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(new Map(arr.entries()));
