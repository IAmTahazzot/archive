/// [DANGER]: ALWAYS REMEMBER TO ELIMINATE THE LOOP ELSE IT WILL CAUSE SYSTEM
/// CRASH :)

/// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i); // 10 times
}

/// while loop
let x = 0;
while (x < 10) {
    x++; /// postfix increment operator

    console.log(x);
}

/// do while loop
x = 0;
do {
    x++; /// postfix increment operator
    console.log(x);
} while( x < 10 );


/// array has a lot of  build in loop methods such as
[1, 2, 3, 4, 5].forEach( (value, index, array) => {
    console.log(value, index, array);
});

/// or old way
let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++ ){
    console.log(myArray[i]); /// computed member access operator
}