/*
- Functions are block scope in 'strict mode'
- 
*/

const NAME = 'Tahazzot';

const first = () => {
  const AGE = 19;

  if (AGE >= 19) {
    var isAdult = true;
  }

  const second = () => {
    const JOB = 'Software Engineer';
    console.log(`I am ${NAME} a ${AGE} old ${JOB}`);
    console.log(isAdult);
  };

  second();
};

first();

{
  function greeting() {
    console.log('Good morning, ' + username);
  }

  const username = 'Tahazzot';
  greeting();
}
