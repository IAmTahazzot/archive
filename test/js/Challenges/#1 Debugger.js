/*
 CODING CHALLENGE #8
--------------------------------------------------------------------

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/

/// 1. Understanding the problem
///    - No Question :)

/// 2. Divide & Conquer
///    - Create a function printForeCast
///    - Print the following using any loop for array

/// 3. Don't afraid to do as much research as you have to
///    - No Need

/// 4. A blueprint of the solution or Pseudo-Code
///    - No Need (easy)

const printForecast = forecast => {

    //// LOOP & PRINT
    let  str = '';
    forecast.forEach((temperature, index) => {
        str += `${temperature}ºC in ${++index} days.`.padStart(20, '.').padEnd(25, '.');
    });

    console.log(str);
};

printForecast([17, 21, 23]);