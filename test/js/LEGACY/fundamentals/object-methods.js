const person = {
  name: 'Tahazzot',
  birthYear: 2002,
  age: new Date().getFullYear() - 2002,
  job: 'Business',
  friends: ['Michael', 'Jordan', 'Peter', 'Mike'],
  hasDriversLicense: true,

  isAdult() {
    console.log(this);
    return new Date().getFullYear() - 2002 >= 18
      ? this.name + ' is an Adult person'
      : 'Sorry, mate. You are not allowed here!';
  },
};

console.log(person.isAdult());
console.log("This is the reason I don't like ");
console.log('--------------');

console.log(person.hasOwnProperty('name'));

const obj = {
  greeting: function () {
    console.log(this);
    console.log('Hi, Tahazzot');
  },

  greeting2: () => {
    console.log('Hi, This is the second greeting from the OBJ');
    console.log(this);
  },
};
