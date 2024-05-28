/**
 * 
 * @TraversingOfDOM
 * 
 * - elm.childNode (all nodes including text, comments, element, etc...)
 * - elm.children (only elements )
 * - elm.firstChild (first childNode, anything)
 * - elm.firstElementChild (the first element child)
 * - elm.lastChild (last childNode)
 * - elm.lastElementChild (last child element)
 */

'use strict';

const root = document.getElementById('root');

// Going downwards: child
const p = document.querySelectorAll('p');
const lastParagraph = p[p.length - 1];

// console.log(lastParagraph.childNodes);
// console.log(lastParagraph.children);

root.firstChild.textContent = 'Hi, Mr Jonathan!'
root.lastElementChild.textContent = 'I HAVE BEEN UPGRADED';

// Going upwards: parents
console.log(lastParagraph.parentNode);
console.log(lastParagraph.parentElement);

// Sibling
console.log(p[0].nextElementSibling);
console.log(p[0].nextSibling);
console.log(p[1].previousElementSibling);
console.log(p[1].previousSibling);