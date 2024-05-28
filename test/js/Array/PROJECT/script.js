/*
# Bank-ist

Simple money management system using javascript

## Tasks

- User login
- Show all movements according to user credentials
- Sort movements
- Deposit, Withdraw, Delete

 */
'use strict';

class Helper {
    on( event, element, callback ) {
       element.addEventListener(event, callback);
    }
}

class Bankist extends Helper{

    constructor() {
        super();

        this.accounts = [
            {
                owner: 'Jonas Schmedtmann',
                movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
                interestRate: 1.2, // %
                pin: 1111,
            },

            {
                owner: 'Jessica Davis',
                movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
                interestRate: 1.5,
                pin: 2222,
            },

            {
                owner: 'Steven Thomas Williams',
                movements: [200, -200, 340, -300, -20, 50, 400, -460],
                interestRate: 0.7,
                pin: 3333,
            },

            {
                owner: 'Sarah Smith',
                movements: [430, 1000, 700, 50, 90],
                interestRate: 1,
                pin: 4444,
            },

        ];
        this.sorted = true;

        this.setupAccounts();
        this.login();
    }

    DOM() {
        const $ = selector => document.querySelector(selector);

        return {
            labelWelcome : $('.welcome'),
            labelDate : $('.date'),
            labelBalance : $('.balance__value'),
            labelSumIn : $('.summary__value--in'),
            labelSumOut : $('.summary__value--out'),
            labelSumInterest : $('.summary__value--interest'),
            labelTimer : $('.timer'),

            containerApp : $('.app'),
            containerMovements : $('.movements'),

            btnLogin : $('.login__btn'),
            btnTransfer : $('.form__btn--transfer'),
            btnLoan : $('.form__btn--loan'),
            btnClose : $('.form__btn--close'),
            btnSort : $('.btn--sort'),

            inputLoginUsername : $('.login__input--user'),
            inputLoginPin : $('.login__input--pin'),
            inputTransferTo : $('.form__input--to'),
            inputTransferAmount : $('.form__input--amount'),
            inputLoanAmount : $('.form__input--loan-amount'),
            inputCloseUsername : $('.form__input--user'),
            inputClosePin : $('.form__input--pin'),
        }
    }

    /**
     * # setupAccounts
     *
     * - add username to each account
     * - set user account id
     */
    setupAccounts() {
       this.accounts.forEach( (account, index) => {
           // assigning username
           account.username = account.owner
               .split(' ')
               .map( namesChunk => namesChunk.charAt(0) )
               .join('')
               .toLowerCase();

           // assigning userid
           account.id = index;
       }) ;
    }

    login() {
       this.on('click', this.DOM().btnLogin, (e) => {
           e.preventDefault();
          const username = this.DOM().inputLoginUsername.value,
            pin = this.DOM().inputLoginPin.value;

          // find the current user & set to currentUser if found
           const currentUser = this.accounts.find( account => {
               return account.username === username && account.pin === Number(pin);
           });

           if (!currentUser) {
               alert('Invalid Credentials');
               return false;
           }

           this.activeUser = currentUser;

           // show movements
           this.render();
           this.sort();
           this.deposit();
           this.withdraw();
           this.deactivate();
       }) ;
    }

    /**
     * # Render
     *
     * - Greet to user
     * - Show all movements by sorting
     * - Balance
     * - Show In, Out & Interest
     */
    render( sort = false ) {
        this.DOM().containerMovements.innerHTML = '';

        this.DOM().containerApp.style.opacity = '1';

        // greeting to the logged user
        this.DOM().labelWelcome.textContent = 'Welcome '+ this.activeUser.owner;

        // showing movement & sort
        const sortedMovements = !sort ? this.activeUser.movements : this.activeUser.movements.slice().sort((a, b) => {
            return a < b ? 1 : -1;
        });

        const movements = sortedMovements.map( (movement, index) => {
            const type = movement > 0 ? 'deposit' : 'withdrawal';
            return `<div class="movements__row">
                        <div class="movements__type movements__type--${type}">
                            ${++index} ${type}
                        </div>
                        <div class="movements__date">...</div>
                        <div class="movements__value">$${Math.abs(movement)}</div>
                    </div>`;
        }).join('');

        this.DOM().containerMovements.insertAdjacentHTML('afterbegin', movements);

        // Balance
        this.DOM().labelBalance.textContent = '$' + this.activeUser.movements.reduce( (acc, next) => {
            return acc + next;
        });

        // In, Out, Interest
        this.DOM().labelSumIn.textContent = '$' + this.activeUser.movements
            .filter( movement => movement > 0)
            .reduce( (acc, next) => acc + next );

        this.DOM().labelSumOut.textContent = '$' + Math.abs(this.activeUser.movements
            .filter( movement => movement < 0)
            .reduce( (acc, next) => acc + next ));

        this.DOM().labelSumInterest.textContent = '$' + this.activeUser.movements
            .filter( movement => movement > 0)
            .map( deposit => (deposit * 1.2) / 100 )
            .filter( value => value >= 1)
            .reduce( (acc, next) => acc + next );

    }

    sort() {
       this.on('click', this.DOM().btnSort, () => {
           this.render(this.sorted);
           this.sorted = !this.sorted;
       });
    }

    deactivate() {
        this.on('click', this.DOM().btnClose, e => {
            e.preventDefault();

            const user = this.DOM().inputCloseUsername.value,
                pin = +this.DOM().inputClosePin.value;

            if (
                this.activeUser.pin === pin &&
                this.activeUser.username === user
            ) {
                this.accounts.splice(this.activeUser.id, 1);
                this.DOM().containerApp.style.opacity = '0';
                this.DOM().labelWelcome.textContent = 'Please login to' +
                    ' access your account';
                alert('Account has been deleted!');

                this.DOM().inputCloseUsername.value =
                    this.DOM().inputClosePin.value = '';
            }else {
                alert('Wrong credential!')
            }
        })
    }

    withdraw() {
        this.on('click', this.DOM().btnTransfer, e => {
            e.preventDefault();

            const to  = this.DOM().inputTransferTo.value,
                amount = +this.DOM().inputTransferAmount.value;

            const transferTo = this.accounts.find( account => {
                return account.username === to;
            });

            if (!transferTo || amount < 0) return false;

            const balance = this.activeUser.movements.reduce( (acc, next) => acc + next);
            if (amount > balance) {
                alert('Insufficient balance!')
                alert('Feel free to take loan 😁');
                return false;
            }


            transferTo.movements.push(amount);
            this.activeUser.movements.push(-amount);

            this.render();
        });
    }

    deposit() {
       this.on('click', this.DOM().btnLoan, (e) => {
           e.preventDefault();
           const loan = +this.DOM().inputLoanAmount.value;
           const balance = this.activeUser.movements.reduce( (acc, next) => acc + next);

           if ( balance * (10 / 100) < loan) {
               this.activeUser.movements.push(Math.abs(loan));
               this.render();
               this.DOM().inputLoanAmount.value = '';
           }
       }) ;
    }
}

new Bankist();