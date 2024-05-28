'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // set default value of passengers & price (old fashion ES5)
  // [numPassengers, price] = [numPassengers || 1, price || 199];

  bookings.push({
    flightNum,
    numPassengers,
    price,
  });
};

createBooking('LH124', 5);
console.log(bookings);
