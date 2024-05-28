'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const $ = selector => document.querySelector(selector);

const form = $('.form');
const containerWorkouts = $('.workouts');
const inputType = $('.form__input--type');
const inputDistance = $('.form__input--distance');
const inputDuration = $('.form__input--duration');
const inputCadence = $('.form__input--cadence');
const inputElevation = $('.form__input--elevation');

class Workout {

  constructor() {
    this.distance = inputDistance.value;
    this.duration = inputDuration.value;
  }
}

class Running extends Workout {
  type = 'running';

  constructor() {
    super();
    this.cadence = inputCadence.value;
    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor() {
    super();
    this.elv = inputElevation.value;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class Maptify {
  #map;
  #lat;
  #lng;

  constructor() {
    this._getLocation();
  }

  handleError(err) {
    console.log(err);
  }

  _getLocation() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), this.handleError);
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    this.#map = L.map('map').setView([latitude, longitude], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.#map);

    L.circle(
      [latitude, longitude],
      {
        radius: 80,
        fillColor: '#2A93EE',
        stroke: true,
        color: '#fff',
        opacity: 1,
        strokeWidth: 3,
        fillOpacity: 1
      }
    )
      .addTo(this.#map);

    L.circle(
      [latitude, longitude],
      {
        radius: 1500,
        fillColor: '#136AEC',
        fillOpacity: .15,
        stroke: false
      }
    )
      .addTo(this.#map);

    this._eventHandler();
  }

  _eventHandler() {
    this.#map.on('click', this._showForm.bind(this));

    document.querySelector('.sidebar').addEventListener('click', function(e) {
      if (!(/form/gi.test(e.target?.classList.value))) {
        form.classList.add('hidden');
      }
    });

    inputType.addEventListener('change', () => {
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    });

    form.addEventListener('submit', this._recordWorkouts.bind(this));
  }

  _showForm(mapdata) {
    const {lat, lng} = mapdata.latlng;
    this.#lat = lat;
    this.#lng = lng;
    // show the form
    form.classList.remove('hidden');
  }

  _recordWorkouts(e) {

    e.preventDefault();

    const type = inputType.value;

    if (type === 'running') {
      const workout = new Running();
      this._renderRunning(workout.distance, workout.duration, workout.pace, workout.cadence);
    }  else {
      const workout = new Cycling();
      this._renderCycling(workout.distance, workout.duration, workout.speed ,workout.elv);
    }

    const d = new Date();
    const desc = ' on ' + months[d.getMonth()] + ' ' + d.getDate();

    L.marker([this.#lat, this.#lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent(
        `${type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${desc}`
      )
      .openPopup();
  }

  _renderRunning(distance, duration, pace, cadence) {
    let html = `<li class="workout workout--running" data-id="1234567890">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">${distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${pace.toFixed(2)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`

    form.insertAdjacentHTML('afterend', html);
  }

  _renderCycling(distance, duration, pace, cadence) {
    let html = `<li class="workout workout--cycling" data-id="1234567890">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">🚴‍♀️</span>
            <span class="workout__value">${distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${pace.toFixed(2)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${cadence}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`

    form.insertAdjacentHTML('afterend', html);
  }
}


const myMap = new Maptify();























