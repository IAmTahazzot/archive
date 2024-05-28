/**
 * 
 * @EventHandler 
 * @EventHandlingTypes
 * 
 * There are many ways to attach event to an element in DOM
 * 
 * 1 <button onClick="invokeFunc()">A HTML Button Element</button>
 * 2 element.addEventListener('click', callbackFunc())
 * 3 element.onClick = function() {}
 * 
 * 2nd option is recommended almost for all case. Because addEventListener has
 * more feature than any other here... how? 
 * - addEventListener can be removed
 * - addEventListener (I forget this one, sorry)
 * 
 * Types Of Events:
 * There are hundreds of events type in javascript, But essentials are those 
 * with KeyBoard, Mouse & Windows, Documents. For more https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event
 * 
 */

const btn = document.querySelector('button');

// using addEventListener
btn.addEventListener('click', function () {
  alert('An click event with addEventListener');
});

// using on (method, event handler)
btn.onmousedown = function () {
  alert('An mousedown event using onmousedown handler!');
};

// remove addEventListener
const p = document.querySelector('p');

const greeting = function (e) {
  alert('Hello, Tahazzot. Have a nice day!');

  // it will also work outside this function ...
  // after 3 seconds remove the event handler...
  setTimeout(() => {
    p.removeEventListener('click', greeting);
  }, 3000);
};

p.addEventListener('click', greeting);