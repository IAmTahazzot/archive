/**

#CODING_CHALLENGE_1

Mark and John are trying to compare their BMI (Body Mass Index), Which is
calculated using the formula:

   EMI = mass / height ** 2
   Hints: Mass in KG & height in Meter

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'markHeightBMI' containing information about
whether Mark has a higher BMI than John

[DATA]:

Mark's weight 78KG and is 1.69m tall
John's weight 92KG and is 1.95m tall

[More DATA]:

Mark's weight 95KG and is 1.88m tall
John's weight 85KG and is 1.76m tall
 */

// const johnsHeight = 1.95,
//     johnsWeight = 92,
//     marksHeight = 1.69,
//     marksWeight = 78;
//
// const johnsBMI = (johnsWeight / johnsHeight ** 2).toFixed(2); // BMI = mass /
// // height ** 2
// const marksBMI = (marksWeight / marksHeight ** 2).toFixed(2);
//
// console.log(johnsBMI < marksBMI);


// for more data (test)
const johnsHeight = 1.76,
    johnsWeight = 85,
    marksHeight = 1.88,
    marksWeight = 95;

const johnsBMI = (johnsWeight / johnsHeight ** 2).toFixed(2); // BMI = mass /
// height **
const marksBMI = (marksWeight / marksHeight ** 2).toFixed(2);

console.log(marksBMI > johnsBMI);

/**

@CODING_CHALLENGE_02

Improve the challenge 1 with conditional statement.
print on console like: John's BMI(27) is higher than Mikes BMI(20) ...

*/

// I am going to use the previous challenges data
if (marksBMI === johnsBMI) {
    console.log('They have same BMI');
} else if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})`);
} else {
    console.log(`Mark's BMI (${marksBMI}) is less than John's BMI (${johnsBMI})`);
}

/**
 CODING CHALLENGE #2
 ---------------------------------------------------------------

 There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

 1. Calculate the average score for each team, using the test data below
 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

 TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

 GOOD LUCK 😀

 */

const scoreDolphins = ([96, 108, 89].reduce((acc, curr) => {
    return acc + curr;
}) / 3).toFixed(2);

const scoreKoalas   = ([88, 91, 110].reduce((acc, curr) => {
    return acc + curr;
}) / 3).toFixed(2);


if (scoreKoalas === scoreDolphins) {
    console.log(
        `They scored same ${scoreKoalas}`
    );
} else if (scoreKoalas > scoreDolphins) {
    console.log(
        `Koala teams wins with ${scoreKoalas - scoreDolphins} points`
    );
} else if (scoreDolphins > scoreKoalas) {
    console.log(
        `Dolphin teams wins with ${scoreDolphins - scoreKoalas} points`
    );
} else {
    console.log('Game is aborted!');
}


/**
 CODING CHALLENGE #3
 ----------------------------------------------------------------------

 Steven wants to build a very simple tip calculator for whenever he goes
 eating in a restaurant. In his country, it's usual to tip 15% if the bill
 value is between 50 and 300. If the value is different, the tip is 20%.

 1. Your task is to calculate the tip, depending on the bill value. Create
 a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

 TEST DATA: Test for bill values 275, 40 and 430

 HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

 GOOD LUCK 😀

 */

const bill  = 275;
const tip   = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
const total = bill + tip;

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${total} `);







