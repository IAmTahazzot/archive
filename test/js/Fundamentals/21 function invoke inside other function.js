const sum = (...n) => n.reduce( (a, b) => a + b );
const avg = (...n) => n.reduce( (a, b) => a + b ) / n.length;

function calc( sub1, sub2, sub3 ) {
   return {
       // calling sum & avg function from outside this function
       total: sum(sub1, sub2, sub3),
       average: avg(sub1, sub2, sub3)
   }
}

const result = calc(68, 89, 56);
console.log(result);