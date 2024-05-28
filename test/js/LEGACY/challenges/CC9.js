/*
 CODING CHALLENGE #9
----------------------------------------------------------------------------

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 

*/

'snake_';

let textarea = document.querySelector('textarea');

// helper function
const convertSnakeToCamel = (text) => {
  return text
    .split('_')
    .map((value, index) =>
      index === 0
        ? value
        : value.charAt(0) && value.charAt(0).toUpperCase() + value.slice(1)
    )
    .join('');
};

function showCheck(times) {
  return '✅'.repeat(times++);
  // return Array(times++)
  //   .join('.')
  //   .split('.')
  //   .fill('✅', 0)
  //   .join('');
}

// attach event listener and filter text to modify
let biggiestLength = 0;

textarea.addEventListener('keyup', (e) => {
  let value = textarea.value
    .split(' ')
    .join(' ')
    .split('\n')
    .join(' ')
    .split(' ')
    .filter((v) => v.trim());
  console.clear();

  for (let [index, item] of value.entries()) {
    const length = convertSnakeToCamel(item).length;
    if (biggiestLength < length) biggiestLength = length;

    console.log(
      `${++index}: ${convertSnakeToCamel(item).padEnd(
        biggiestLength + 5
      )} ${'✅'.repeat(index)}`
    );
  }
});
