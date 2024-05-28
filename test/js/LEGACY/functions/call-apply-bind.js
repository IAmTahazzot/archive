const lufthansa = {
  airline: 'Lufhansa',
  iataCode: 'LH',
  bookings: [],

  /**
   * @param flightNum
   * @param name
   *
   * Book function will take or book a new sit for the booking
   */
  book(flightNum, name = 'You') {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(234, 'Jonas');
lufthansa.book(423, 'John Smith');

console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// CALL & APPLY to do the same thing except APPLY takes only Array as arguments!
book.call(eurowings, 534, 'Sarah Williams');
book.apply(eurowings, [352, 'Siri Of Cira']);

console.log(eurowings.bookings);
console.log(lufthansa.bookings);

// BIND
// Useful on Event Listener to bind (this keyword) or In partial
const bookEW = book.bind(eurowings);
bookEW(234, 'Steven Williams');

console.log(eurowings.bookings);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value .23;

console.log(addVAT(100));
console.log(addVAT(23));
