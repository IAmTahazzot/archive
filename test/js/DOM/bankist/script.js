'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//// TASKS:
//// 1. Sticky Navigation
//// 2. Fade effect
//// 3. Lazy loading
//// 4. Tab
//// 5. Slider


//// Helper Functions
const $ = selector => document.querySelectorAll(selector);


//// 1. Sticky Navigation
const stickyNavigationFunc = () => {
  const nav = $('.nav')[0];
  const header = $('.header')[0];

  const stickyNav = ([entry]) => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };

  const stickyNavOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-100px'
  };

  const observer = new IntersectionObserver(stickyNav, stickyNavOptions);
  observer.observe(header);
}

//// 2. Fade effect
const fadeEffectFunc = () => {
  const sections = $('.section');

  const fadeEffect = ([entry]) => {
    if (!entry.isIntersecting) return false;
    entry.target.classList.remove('section--hidden');
  }

  const observer = new IntersectionObserver(fadeEffect, {
    root: null,
    threshold: 0.05
  });

  sections.forEach( section => {
    section.classList.add('section--hidden');
    observer.observe(section);
  });
}

//// 3. Lazy Loading
const lazyLoader = () => {
  const images = $('.features img');

  const loadImage = ([entry], observer) => {
    if (!entry.isIntersecting) return false;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  }

  const observer = new IntersectionObserver(loadImage, {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px 200px 0px'
  });

  images.forEach( img => {
    observer.observe(img);
  });
}

//// 4. Tab


//// 5. Slider

stickyNavigationFunc();
fadeEffectFunc();
lazyLoader();