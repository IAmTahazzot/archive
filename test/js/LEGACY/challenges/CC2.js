/**
 CODING CHALLENGE #2
---------------------------------------------------------------

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

*/

/**
 SOLUTION #1
-------------------------------------------------------------------

Using simple array & logics
*/

const avg = (arr) => arr.reduce((n1, n2) => n1 + n2) / 3;

const TEAMS = {
  dolphins: {
    round1: avg([96, 108, 89]),
    round2: avg([97, 112, 101]),
    round3: avg([97, 112, 101]),
  },

  koalas: {
    round1: avg([88, 91, 110]),
    round2: avg([109, 95, 123]),
    round3: avg([109, 95, 106]),
  },
};

if (TEAMS.dolphins.round1 > TEAMS.koalas.round1) {
  console.log(
    'Dolphins team wins the first round! with ' + TEAMS.dolphins.round1
  );
} else {
  console.log(
    `Koalas team wins the first round with ${TEAMS.koalas.round1} points! Hurrah...`
  );
}

if (
  TEAMS.dolphins.round2 >= 100 &&
  TEAMS.koalas.round2 < TEAMS.dolphins.round2
) {
  console.log('Hurrah dolphins team round2 wins');
} else if (
  TEAMS.koalas.round2 >= 100 &&
  TEAMS.koalas.round2 > TEAMS.dolphins.round2
) {
  console.log('Koalas teams wins the second round');
} else {
  console.log('No on wins');
}

// Check draw also
if (TEAMS.dolphins.round3 === TEAMS.koalas.round3) {
  console.log('Draw match');
} else if (
  TEAMS.dolphins.round2 >= 100 &&
  TEAMS.koalas.round2 < TEAMS.dolphins.round2
) {
  console.log('Hurrah dolphins team round2 wins');
} else if (
  TEAMS.koalas.round2 >= 100 &&
  TEAMS.koalas.round2 > TEAMS.dolphins.round2
) {
  console.log('Koalas tems wins the second round');
} else {
  console.log('No on wins');
}
