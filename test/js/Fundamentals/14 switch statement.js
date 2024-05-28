/*
Switch is a conditional statement like If else statement
 */

const DAY = 4;
let today;

switch (DAY) {
    case 0:
    case -0: // multiple case can be used
        today = 'Sunday';
        break;

    case 1:
        today = 'Monday';
        break;

    case 2:
        today = 'Tuesday';
        break;

    case 3:
        today = 'Wednesday';
        break;

    case 4:
        today = 'Thursday';
        break;

    case 5:
        today = 'Friday';
        break;

    case 6:
        today = 'Saturday';
        break;

    default:
        today = 'Unknown day!';
}

console.log(today);