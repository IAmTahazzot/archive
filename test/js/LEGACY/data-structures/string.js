const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log('B702'.length);

console.log(airline.indexOf('Portugal'));

// extract the first word from string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.split(' ')[0]);

// extract the last word from string
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.split(' ')[airline.split(' ').length - 1]);

// slice method
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Check Middle Seat
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  return seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? 'You are on the middle seat'
    : 'You are not on the middle seat';
};

const a = checkMiddleSeat('11B');
const b = checkMiddleSeat('23C');
const c = checkMiddleSeat('3E');

console.log(a);
console.log(b);
console.log(c);

/*
  METHODS
----------------------------------------------------------------------------

1 toUpperCase
2 toLowerCase
3 slice
4 split
5 indexOf
6 lastIndexOf
7 concat
8 repeat
9 search
10 includes
11 charAt
12 charCodeAt
13 replace
14 trim
15 trimLeft
16 trimRight
17 startsWith
18 endsWith

*/

let str = "I'm anonymous!";

console.log(str.toUpperCase()); // I'M ANONYMOUS!
console.log(str.toLowerCase()); // i'm anonymous!
console.log(str.slice(0, 3)); // I'm
console.log(str.split('')); // [ 'I', '\'', 'm', ' ', 'a', 'n', 'o', 'n', 'y', 'm', 'o', 'u', 's', '!' ]
console.log(str.indexOf("I'm")); // 0
console.log(str.lastIndexOf('anonymous')); // 4
console.log(str.concat(' Just kidding :)')); // I'm anonymous! Just kidding :)
console.log(str.repeat(4)); // (4 times I'm anonymous!)
console.log(str.search('anonymous')); // 4
console.log(str.includes("I'm")); // true
console.log(str.charAt(0)); // I
console.log(str.charCodeAt(0)); // 73 (Unicode Of Char "I")
console.log('   I am anonymous '.trim());
console.log(str.replace("I'm", "You're").replace('anonymous', 'a good person'));
console.log(
  'I like books, because books can unlesh everything!'.replace(
    /books/gi,
    'Gardening'
  )
);
console.log('Hi, I am fine'.startsWith('Hi'));
console.log('Hey, It is me!'.endsWith('me!'));

// Capitalize name
const capitalize = (text) => {
  if (!text || !text.trim()) return;
  return text
    .split(' ')
    .map((value) => {
      if (!value) return;
      return value[0].toUpperCase() + value.slice(1);
    })
    .join(' ');
};

const capitalize2 = (text) => {
  if (!text || !text.trim()) return;

  const split = text.split(' ');
  const namesUpper = [];

  for (const n of split) {
    if (!n[0]) continue;
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return namesUpper.join(' ');
};

console.log(capitalize('md tahazzot hossain'));
console.log(capitalize2('this is fine '));

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Solution
const refineFlightDetails = (flight) => {
  let [flightName, from, to, time] = flight.split(' ');

  // Refine FlightName
  flightName = flightName.replace(/_/g, ' ');
  if (flightName.includes('Delayed')) {
    flightName = '⚠️' + flightName;
  }

  // Refine From & To
  [from, to] = [from.slice(0, 3).toUpperCase(), to.slice(0, 3).toUpperCase()];

  // Refine Time
  time = `(${time.replace(/h/, 'h ').concat('m')})`;

  return `${flightName} from ${from} to ${to} in ${time}`;
};

const filterFlights = flights.replace(/:/g, 'h').replace(/;/g, ' ').split('+');

filterFlights.forEach((flight) => {
  console.log(refineFlightDetails(flight).padStart(36));
});
