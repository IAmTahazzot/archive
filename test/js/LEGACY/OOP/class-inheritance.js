'use strict';

class Bank {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    
    // this.locale = navigator.language;

    console.log(`Good evening, Mr ${this.owner}`);
  }

  deposit(amount) {
    this.movements.push(amount);
  }

  withdraw(amount) {
    this.deposit(-amount);
  }
}

const acc1 = new Bank('Stephanie', 'EUR', '1111');

console.log(acc1);

acc1.deposit (200);
acc1.withdraw (120);
console.log(acc1);