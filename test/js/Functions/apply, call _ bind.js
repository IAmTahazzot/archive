// Call, Apply & Bind is used to attach method reference to another objects
// Call takes arguments individually followed by this (Object ref) keyword
// Apply takes arguments as a set of array followed by this keyword


// Bind is important when you need change the 'this' (object ref) but not
// invoke immediately

const Bank = {
    deposit( amount ) {
        this.balance += amount;
        console.log(`You have successfully deposited $${amount}. Your current account balance is ${this.balance}`);
    },

    withdraw ( amount ) {
        if ( this.balance < amount ) {
            console.log('Insufficient balance, You can take loan!');
        }

        this.balance -= amount;
        console.log(amount + ' withdrawals is successfully completed!',
            'Your current balance is $'+ this.balance);
    }
}

const Tahazzot = {
    name: 'City Bank LTD',
    balance: 3902,
};

// Accessing my bank data
console.log(Tahazzot);

Bank.deposit.call(Tahazzot, 200);
Bank.withdraw.apply(Tahazzot, [102]);

Bank.deposit.bind(Tahazzot)(200); // attached but need to invoke