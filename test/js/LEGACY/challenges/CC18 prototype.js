/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const genColor = function () {
  const colors = ['red', 'green', 'orange', 'blue', 'purple', 'yellow', 'skyblue'];

  return colors[Math.floor(Math.random() * colors.length)];
}

const log = function (message, color) {
  setTimeout(console.log.bind(console, '%c' + message, 'color: '+color+';'), 0);
}

const Car = function(make, speed, color = genColor()) {
  this.make = make;
  this.speed = speed;
  this.color = color;
};

Car.prototype.accelerate = function( speed = 10 ) {
  this.speed += speed;
  log(`You current speed increased to ${this.speed} km/h`, this.color);
};

Car.prototype.break = function( decrease = 5 ) {
  this.speed -= decrease;
  log(`You current speed is ${this.speed} km/h`, this.color);
}

const car1 = new Car('BMW', 120, 'blue');
const car2 = new Car('Mercedes', 95, 'purple');

console.log(car1);
console.log(car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();

car2.accelerate();
car2.accelerate();
car2.break();