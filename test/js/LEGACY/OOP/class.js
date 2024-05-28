class Cash {
  add(amount) {
    this.amount = amount;
  }
}

class Airport extends Cash {
  constructor(name, amount) {
    super(amount);
    // In constructor function we use:
    // Superclass.call(this, argument1, argument2, [...n]);
    this.name = name;
  }

  isAvailableToday() {
    return true;
  }

  static isOpen() {
    return 'Yes it\'s open!';
  }
  /*
   In constructor function:
   Airport.isOpen = function () { return ''; }
  */

  // setter & getter
  get countryName() {
    return this.name;
  }

  set countryName(name) {
    this.name = name;
  }

}

const Bankok = new Airport('Bankok');

console.log(Bankok.add(200));
console.log(Bankok.isAvailableToday());
console.log(Bankok);
console.log(Bankok.countryName);

console.log(Airport.isOpen());
// console.log(Bankok.isOpen()); // Error