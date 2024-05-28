const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        fri: {
            open: 11,
            close: 23,
        },
        thu: {
            open: 12,
            close: 22,
        },
    },
};

// simple object destructuring
const { name: nam, location:addr} = restaurant;
// console.log(nam);
// console.log(addr);


// nested object + default values
const { openingHours: { thu: t = [], fri: f = [] } } = restaurant;
console.log(t, f);

// reassign values + default values
let x, y = '';

({name: x = [], mainMenu: y = []} = restaurant);
// console.log(x, y)