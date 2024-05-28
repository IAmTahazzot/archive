const studentMarks = [70, 24, 83, 50, 33];

studentMarks.sort((a, b) => {
    return a > b ? -1 : 1;
}); // callback function

console.log(studentMarks);


const calcAge = function( person, callback ) {
   return callback(person.name, person.age)
};

const callbackFunc = function(name, age) {
     console.log(`${name} is ${age} years old.`)
};

const person = {
    name: 'Tahazzot',
    age: 20
};

calcAge( person, callbackFunc ); // DO NOT INVOKE THE FUNCTION JUST PASS IT :)

// calcAge( {
//     name: 'Tahazzot',
//     age: 20
// }, function( name, age ) {
//    console.log(`${name} is ${age} years old.`);
// });