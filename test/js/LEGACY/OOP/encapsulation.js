'use strict';

class Bank {

  // 1) Public properties
  locale = 'Bangladesh, BD';

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // this.locale = navigator.language;
    this.#pin = pin;

    console.log(`Good evening, Mr ${this.owner}`);
  }

  // 3) Public methods
  deposit(amount) {
    this.#movements.push(amount);
  }

  withdraw(amount) {
    this.deposit(-amount);
  }

  // 4) Private methods
  #approveLoan(pin) {
    return this.#pin === pin;
  }

  requestLoan(pin, val) {
    if (this.#approveLoan(pin)) {
      this.deposit(val);
      console.log('Loan approved!');
    } else {
      console.log('Wrong pin number!');
    }
  }
}

const acc1 = new Bank('Stephanie', 'EUR', '1111');

console.log(acc1);

acc1.deposit (200);
acc1.withdraw (120);
console.log(acc1);

acc1.requestLoan('1111', 230);