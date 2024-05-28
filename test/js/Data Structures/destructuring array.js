const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// simple array destructuring
const [firstItem, secondItem, thirdItem] = restaurant.mainMenu;
// console.log(firstItem, secondItem, thirdItem);

// skip items
const [firstCat, , thirdCat] = restaurant.categories;

// using array destructuring
const [starterItem, mainItem] = restaurant.order(1, 0);
// console.log(starterItem, mainItem);

// nested destructuring
const nested = [1, 2, [3, 4, 5]];
const [one, , [three, four]] = nested;
// console.log(one, three, four);

// default value
const cities = ['Dhaka', 'Bogura'];
const [cityOne = 'Unknown', cityTwo = 'Unknown', cityThree = 'Unknown'] = cities;
// console.log(cityOne, cityTwo, cityThree);


// reassign values
let x, y = '';

[x, y] = restaurant.mainMenu;
console.log(x, y);