// Object literal
const Person = {
  name: 'Tahazzot',
  birthYear: 2002,
  age: new Date().getFullYear() - 2002,
  gender: 'Male',
  job: 'Business',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Object with new Object()
const Anonymous = new Object({
  name: 'Anonymous',
  age: 2004,
});

console.log(Person.name);
console.log(Anonymous['name']);

const propertyName = 'age';
console.log(Anonymous[propertyName]); // Charly braces is useful for dynamic value

Person['twitter'] = '@IAmTahazzot';
console.log(Person.twitter);
console.log(Person['twitter']);
