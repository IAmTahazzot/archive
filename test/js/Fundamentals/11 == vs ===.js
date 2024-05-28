/*

== (Equality operator) only checks values
=== (Strict Equality operator) checks both data types and values [ RECOMMENDED ]
 */


const x = '20';

console.log( x == 20 ); // true (try to avoid it)
console.log( x === 20 ); // false (recommended)