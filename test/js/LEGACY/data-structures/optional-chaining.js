// New feature from ES2020

const restaurant = {
  openingHours: {
    fri: {
      open: 11,
      close: 24,
    },
    mon: {
      open: 9,
      close: 20,
    },
  },

  order(...foods) {
    return [...foods];
  },
};

// Optional Chaining Operator
console.log(restaurant.openingHours?.fri?.open ?? 'closed');
console.log(restaurant.order?.('Pizza', 'Meat') ?? 'Method does not exist');

// same as below
if (restaurant.openingHours) {
  if (restaurant.openingHours.fri) {
    if (restaurant.openingHours.fri.open) {
      // code...
      console.log(restaurant.openingHours?.fri?.open);
    }
  }
}

// or
if (
  restaurant.openingHours &&
  restaurant.openingHours.fri &&
  restaurant.openingHours.fri.open
) {
  // code...
  console.log(restaurant.openingHours?.fri?.open);
}
