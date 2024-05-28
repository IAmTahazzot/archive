/*
 CODING CHALLANGE #11
----------------------------------------------------------------------------

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
game.scored.forEach((playerName, playerGoal) => {
  console.log(`Goal ${++playerGoal}: ${playerName}`);
});

// More 1
for (let player of game.scored.entries()) {
  console.log(`Goal ${++player[0]}: ${player[1]}`);
}

// 2
const avgOdds =
  Object.values(game.odds).reduce((a, b) => a + b) /
  Object.values(game.odds).length;
console.log(avgOdds);

// 3
for (let each of Object.keys(game.odds)) {
  console.log(
    `Odd of ${each !== 'x' ? 'Victory ' + game[each] : 'Draw'}: ${
      game.odds[each]
    }`
  );
}

// BONUS :)
const scorers = {};
game.scored.forEach((name, index) => {
  scorers[name] = game.scored.filter(
    (playerName) => playerName === name
  ).length;
});

console.log(scorers);
