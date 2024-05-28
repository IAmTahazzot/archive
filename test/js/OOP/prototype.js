const Person = function(name, age) {
   this.name = name;
   this.age  = age;
};

Person.prototype.isAdult = function() {
    return this.age >= 18;
};

const jn = new Person('John', 14);

console.log(jn.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jn)); // true