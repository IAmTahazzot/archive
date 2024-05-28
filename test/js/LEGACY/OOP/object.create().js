const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);

steven.calcAge();
console.log(steven.__proto__ === PersonProto);