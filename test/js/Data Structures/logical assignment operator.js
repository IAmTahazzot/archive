const restaurant = {
    name: 'Laviousa Mania',
    founder: 'Anwar'
};

// let's assign guest members if not exist (default)
// restaurant.guest = restaurant.guest || 10;
restaurant.guest ??= 10; // more shorter :) version
console.log(restaurant);
