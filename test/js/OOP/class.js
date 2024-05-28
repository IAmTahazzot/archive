/**
 * @class Person
 *
 * Basic information about a person & what he/she actually do.
 */
class Person {
   constructor(name, age, profession = 'Student') {
       this.name = name;
       this.age = age;
       this.profession = profession;
   }

   isAdult() {
       // A child become an Adult at the age of 18
       return this.age >= 18;
   }
}


/**
 * @class Doctor
 *
 * Blueprint for doctors datasets, Information about them and what are they
 * specialized at!
 */
class Doctor extends Person{

    /**
     * @constructor
     *
     * Initialize all data set
     */
    constructor(name, age, profession = 'Doctor') {
       super(name, age, profession);
       this._specialized = 'N/A';
    }

    isOld() {
        return this.age > 55 ? `Doctor ${this.name} is aged well!` : 'Still' +
            ' Young';
    }

    static bio() {
        // nothing to do with this class for any dynamic interaction
    }

    set specialized( subject ) {
        if (
            typeof subject !== 'string' && subject.trim() === '' &&
            subject.length <= 3
        ) {
            return false;
        }

        this._specialized = subject;
    }

    get specialized () {
        return this._specialized;
    }
}

const doc = new Doctor('Tahazzot', 20);
console.log(doc);