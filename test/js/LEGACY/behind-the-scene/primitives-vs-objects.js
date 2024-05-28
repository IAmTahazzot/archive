/*
PRIMITIVES:

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

OBJECTS:

- Object literal
- Functions
- Arrays
- Resources
- Many more...

*/

/**
 *
 * @param {[OBJECT*]} Obj
 * @returns newClonedObject
 *
 * ### cloneObject
 *
 * An Incompleted helper function! (EXPERIMENTAL FUNCTION)
 */
function cloneObject(Obj) {
  const newObj = new Object();
  for (let element in Obj) {
    let value = Obj[element];

    if (!Array.isArray(value)) {
      newObj[element] = value;
    } else {
      let newArr = new Array(...value);
      newObj[element] = newArr;
    }
  }
  return newObj;
}

let Person = {
  name: 'Tahazzot',
  birthYear: 2002,
  getAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },

  friends: ['Martin', 'Synthya', 'Jerin', 'Muhammad Khalid', 'Alex'],
};

//let Person2 = Object.assign({}, Person); // Shallow clone
//let Person2 = {...Person}; // Shallow Clone
//let Person2 = JSON.parse(JSON.stringify(Person)); // Deep clone but not recommended for functions & symbols etc... have problems. Lodash is recommended!
let Person2 = cloneObject(Person);

Person2.name = 'Martin';
Person2.friends[0] = 'Tahazzot';
Person2.friends.push('Zendya');

console.log(Person);
console.log(Person2);
