///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

!( function () {
  const header = document.querySelector('h1');
  header.style.backgroundColor = 'red';

  document.querySelector('body').addEventListener('click', () => {
      // header is still available in this callback here because of closures. As we know
      // even though our IIFE has gone from the execution context but our callback function
      // have access to all it's variable env... (simply the closures :)
      header.style.backgroundColor = 'blue';
  });
}) ();