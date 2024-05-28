/*
 Destructuring is a Modern ES6 syntax that unpack data from an Array or Object.
-----------------------------------------------------------------------------

Modern syntax!
*/
'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 22,
    },
  },

  // take order :)
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  // order delivery
  orderDelivery({ time, date, order, name, address }) {
    console.log(
      `${name} your order will be soon at ${address} before 24 hours`
    );
    console.log(order, date, time);
  },
};

{
  // ARRAY
  // Getting categories & Skip the 2nd category
  let [firstCat, , thirdCat] = restaurant.categories;
  console.log(firstCat, thirdCat);

  // Flip the values
  [thirdCat, firstCat] = [firstCat, thirdCat];
  console.log(firstCat, thirdCat);

  // Let's order something ;)
  const [firstOrder, secondOrder] = restaurant.order(2, 0);
  console.log(firstOrder, secondOrder);

  // Fetch data from an nested array
  const randomNumber = [5, 2, [7, 9]];
  const [five, , [seven, nine]] = randomNumber;
  console.log(five, seven, nine); // 5 7 9 :)

  // Default value when destructuring...
  const [mainOne, mainTwo, mainThree, mainFourth = 'N/A'] = restaurant.mainMenu;
  console.log(mainOne, mainTwo, mainThree, mainFourth);
}

{
  // OBJECT

  // Extract the restaurant object
  // Now variable names are same as property name [NOTE]
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  // Use new placeholder/ var name instead of property name
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);

  // Default value
  const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);

  // Mutate
  let x = 0;
  let y = 1;

  const obj = { x: 1, y: 2, z: 3 };
  ({ x, y } = obj);
  console.log(x, y);

  // Nested destructuring
  const {
    fri: { open = 'NA', close = 'NA', isClosed = "Don't know!" },
    fri,
  } = restaurant.openingHours;
  console.log(open, close, fri, isClosed);

  // Object destructuring in function parameter
  restaurant.orderDelivery({
    name: 'Tahazzot',
    order: restaurant.order(2, 0),
    address: 'House 47, Bogura, Bangladesh',
    time: new Date().getMonth(),
    date: new Date().toDateString(),
  });
}
