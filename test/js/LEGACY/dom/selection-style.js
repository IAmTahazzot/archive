// getElementsByTagName, getElementsByClassName return HTMLCollections not NodeList (HTMLCollection updates automatically after any change on any Element)

// select element
const paragraphs = document.querySelectorAll('p');

// creating new element node
const span = document.createElement('span');
span.textContent = ' I am new ';
span.style.color = '#0077ff';
span.style.fontFamily = 'Segoe UI';
span.style.fontSize = '24px';

paragraphs[0].insertAdjacentElement('afterbegin', span);

// remove element
const button = document.querySelector('button');
button.addEventListener('click', () => {
  span.remove();
  // or span.parentElement.removeChild(span);
  // or paragraphs[0].removeChild(span);
});