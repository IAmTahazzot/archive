const fruits = ['Pineapple', 'Mango', 'Banana', 'Apple'];

for (let fruit of fruits) console.log(fruit);

for (let fruit of fruits.entries()) {
    console.log(fruit[0] + ' is ' + fruit[1]);
}