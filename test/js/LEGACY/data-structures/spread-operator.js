const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

restaurant.menu = [...restaurant.starterMenu, ...restaurant.mainMenu, 'Gnocci'];
console.log(restaurant);

// Strings spread operator
console.log(...'Tahazzot');

// Shallow copy is easy now :)
const restaurantCopy = { ...restaurant }; // Instead of Object.assign({}, restaurant);
restaurantCopy.name = 'Rastorento Monno';

console.log(restaurant);
console.log(restaurantCopy);
