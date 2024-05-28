// @ts-checks
let button = document.querySelector('button');
let h1 = document.querySelector('h1');
const data = {
  username: 'Tahazzot',
  age: 19,
  userdata: +prompt('Enter your birthyear'),
};

console.table(data);

button.addEventListener('click', () => {
  data.userdata = data.userdata + 2;
  console.table(data);
  h1.classList.toggle('invisible');
});
