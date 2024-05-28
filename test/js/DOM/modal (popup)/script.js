'use strict';

const btns = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};

const closeModal = () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

btns.forEach( elm => {
    elm.addEventListener('click', showModal);

});

overlay.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;

        default:
            // nothing...
    }
});