/**
 Coding Challenge #1
-----------------------------------------------------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 

*/

function firstTest() {
  const Mark = { weights: 78, height: 1.69 };
  const John = { weights: 92, height: 1.95 };

  const marksBMI = Mark.weights / Mark.height ** 2;
  const johnsBMI = John.weights / John.height ** 2;

  const isMarksBMIHigher = marksBMI > johnsBMI;
  if (isMarksBMIHigher) {
    console.log("Mark has higher BMI than John's");
  } else {
    console.log("John's BMI is higher than Mark's BMI");
  }
}

function secondTest() {
  const Mark = { weights: 95, height: 1.95 };
  const John = { weights: 82, height: 1.76 };

  const marksBMI = Mark.weights / Mark.height ** 2;
  const johnsBMI = John.weights / John.height ** 2;

  const isMarksBMIHigher = marksBMI > johnsBMI;
  if (isMarksBMIHigher) {
    console.log("Mark has higher BMI than John's");
  } else {
    console.log("John's BMI is higher than Mark's BMI");
  }
}

firstTest();
secondTest();
