// Operator precedence is the order in which the operator applied to the operands in an expression

// For more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = new Date().getFullYear();

// addition and substraction has 12 precedence but < and > has only 10
console.log(now - 2004 < now - 2002);
