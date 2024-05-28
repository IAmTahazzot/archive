/**
 * DOM:
 * 
 * @styles
 * @attributes
 * @classes
 */

'use strict';


const paragraph = document.querySelector('p');
const button    = document.querySelector('button');

// Changing Style
paragraph.style.fontFamily = 'Segoe UI';
paragraph.style.fontSize = '52px';
paragraph.style.color = '#0077ff';
console.log(paragraph.style.color);
console.log(paragraph.textTransform); // undefined
console.log(getComputedStyle(paragraph).textTransform); // uppercase

// Set & Get Attributes
console.log(paragraph.getAttribute('style')); // will return inline styles
console.log(paragraph.style.fontFamily); // Segoe UI
button.setAttribute('style', 'font-size: 1rem; padding: .75rem 1rem; border: 1px solid #ddd; border-radius: .25rem;font-family: "Segoe UI"; ');

// Classes
button.classList.add('btn--green');
setTimeout( () => button.classList.remove('btn--green'), 1000);
setTimeout( () => button.classList.toggle('btn--green'), 2000);

console.log(button.classList.contains('btn--green'));