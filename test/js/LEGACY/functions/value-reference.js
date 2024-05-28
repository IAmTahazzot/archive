const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2347234293,
};

// flightNum is primitives that copies the value
// passenger object is just reference or the same object located on memory heap
// OBJ will changed!
const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

  if (passenger.passport === 2347234293) {
    console.log('Access granted!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 2347234293 }

/*
 newPassport
------------------------------------------------------

will change the passport only
*/
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
