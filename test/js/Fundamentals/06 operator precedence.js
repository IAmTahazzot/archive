/**
 *
 * Operator precedence is the way in which order a task should execute.
 * [Learn More]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
 */

// just one example to show how it works
console.log(
    2 ** 3 > 13 % 7
)

// exponentiation has higher precedence (13)
// reminder(%) has higher precedence (12)
// but greater than operator has only precedence (9)

// so exponentiation & reminder will execute first then the greater than (>)