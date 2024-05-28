/**
 * @AJAX
 *
 * Asynchronous JavaScript And XML: Allows us to communicate with remote web
 * servers in an asynchronous way. With AJAX calls, we can request data from web
 * server dynamically.
 *
 * @API
 *
 * Application Programming Interface: Piece of software that can be used by
 * another piece of software, in order to allow applications to talk to each
 * other.
 */

'use strict';

// DOM
const countries_container = document.querySelector('.countries');

// OLD WAY TO SEND REQUEST (NOT RECOMMENDED)
const getCountryInfo = (country) => {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://restcountries.com/v2/name/' + country);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
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
    countries_container.classList.add('active');
  });
};

const getCountryData = (country) => {
  fetch('https://restcountries.com/v2/name/' + country)
    .then((response) => response.json())
    .then((allData) => {
      const [data] = allData;
      const html = `
          <article class="country">
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
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
        `;

      countries_container.insertAdjacentHTML('afterbegin', html);
      countries_container.classList.add('active');
    });
};

getCountryData('bangladesh');
