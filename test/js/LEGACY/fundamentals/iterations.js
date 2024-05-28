for (let i = 1; i <= 10; i++) {
  console.log('I am on line ' + i);
}

let arr = ['Jonas', 'Mike', 'Jordan', 'Alex', 'Smith'];

// Using for LOOP
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Using build in method forEach
arr.forEach((value, index, arr) => {
  console.log(value, index);
});

// Using for In
for (let i in arr) {
  console.log(arr[i]);
}

// Backward loops
// Should start with Smith
for (let i = arr.length - 1; i > 0; i--) {
  console.log(arr[i]);
}

// Loops inside loop
for (let i = 1; i <= 5; i++) {
  console.log('Starting Exercise ' + i + ' ---------------');

  for (let j = 1; j <= 5; j++) {
    console.log('Weight lifting ' + j);
  }
}

// While loop
let x = 1;

while (x <= 10) {
  console.log(x);
  x++;
}

// Do While
let y = 1;

do {
  console.log(y);
  y++;
} while (y <= 10);
