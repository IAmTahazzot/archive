/*
Object is just a key and values pairs data structure, well more than that. :)
 */

const bank = {
    name: 'Tahazzot',
    age: 20,
    dateOfBirth: new Date('2002-05-04'),

    account: {
        balance: 23840,
        createdAt: new Date().getUTCDate()
    },

    calculateCustomerAge() { // [A METHOD]
       return new Date().getFullYear() - this.dateOfBirth().getFullYear();
       /// 'this' keyword refers to the bank object itself (not the global this)
    }
};


/// left hand side label is called key and right hand side after : (colon)
/// is value of the key

/// we can use member access or computed member access operator to access
/// the object information
const balance_key = 'balance';

console.log(
    bank.dateOfBirth, // member access operator is just a dot (.)
    bank['account'][balance_key] // computed member access operator square
    // brackets []
);

console.log(
    bank.calculateCustomerAge()
);