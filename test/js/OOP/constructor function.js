
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Person = function( name, age ) {
    this.name = name;
    this.age  = age;
};

const john = new Person('John', 20);
console.log(
    john
)