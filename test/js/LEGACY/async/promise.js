'use strict';

const btn = document.querySelector('.btn');
const countries_container = document.querySelector('.countries');

const renderCountryData = (data, className = '') => {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)} Million</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[0].nativeName
        }</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countries_container.insertAdjacentHTML('afterbegin', html);
};

const getJSON = async (url, errorMessage = 'Something went wrong!') => {
  const response = await fetch(url);
  // check response is ok or not?
  if (!response.ok) {
    throw new Error(`${response.status} ${errorMessage}`);
  }
  return await response.json();
}

const getCountryData = (country) => {
  getJSON('https://restcountries.com/v2/name/' + country, 'Country not found!')
    .then((data) => {
      renderCountryData(data[0]);

      if (!data[0].borders) {
        throw new Error('No neighbours found!');
      }
      // fetch neighbour countries data
      const neighbour = data[0].borders[0];

      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found!');
    })
    .then((data) => {
      // render neighbour country
      renderCountryData(data, 'neighbour');
    })
    .catch((error) => {
      Swal.fire({
        title: error.message,
        icon: 'question',
        iconHtml: '🌐',
      });
    })
    .finally(() => {
      countries_container.classList.add('active');
    });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //     err    => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

btn.addEventListener('click', () => {
  btn.style.display = 'none';
  getPosition().then((pos) => {
    const {latitude, longitude} = pos.coords;
    
    // get the location and country information
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Please refresh the page in a few seconds')
        }
        return res.json()
      })
      .then(data => {
        getCountryData(data.country)
      })
      .catch(err => {
        document.body.innerHTML = err.message;
      })
  }).catch(err=> {
    Swal.fire( {
      title: 'Please allow the location access. [' + err.message + ']',
      icon: 'error'
    });
  })
});

/**
Promise callback will execute first because of MicroStacks Queue.
MicroStacks Queue has top priority than normal callback queue.

[NOTE]: MicroStacks Queue only used for Promise.
*/

// console.log('Starting test');

// setTimeout(() => console.log('1s letter'), 0);
// Promise.resolve('A Simple Promise that has been resolved.')
//   .then(res => {
//     for (let i = 0; i < 10000000000; i++) {}
//     console.log(res);
//   });

// console.log('[END]');

// Timeout with promise
// const wait = function (seconds) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2).then(res => {
//   console.log('I have waited for 2 seconds');

//   return wait(1);
// }).then(res => {
//   console.log('I have waited for 3 seconds');
// });
