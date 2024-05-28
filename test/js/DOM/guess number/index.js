'use strict';

/**
 *
 * @param selector is element selector
 * @return {*}  Single Element
 */
const $ = selector => document.querySelector(selector);

//// Select all necessary elements
const message = $('.message');
const number = $('.number');
const score = $('.score');
const highScore = $('.highscore');
const guess = $('.guess');
const btn = $('.check');
const again = $('.again');

//// Initial Setup & Load initial values
const ini = {
    randomNumber: 0,
    score: 20,
    highestScore: 0,

    generateRandomNumber() {
        this.randomNumber = Math.floor(Math.random() * 20 + 1);
    }
};

score.textContent = ini.score;
highScore.textContent = ini.highestScore;

// generate number before load it
ini.generateRandomNumber();
number.textContent = '?';


// helper functions
const reset = () => {
    // reset ini
    ini.generateRandomNumber();
    ini.score = 20;

    // reset ui
    score.textContent = ini.score;
    message.textContent = 'Game has been restarted, please choose a number!';
    document.body.style.backgroundColor = '#222';
    number.textContent = '?';
    btn.removeAttribute('disabled');
    btn.style.opacity = 1;

    guess.value = '';
    guess.focus()
};

const gameOver = () => {
    document.body.style.transition = 'background-color 1s'
    document.body.style.backgroundColor = '#e11e1e';
    message.textContent = 'You have lost the game!';
    number.textContent = ini.randomNumber;

    btn.setAttribute('disabled', true);
    btn.style.opacity = '0.4';
};

/**
 * # Hint
 *
 * give hints to choose the right number
 *
 * @param text
 */
const hint = text => {
    // decrease the scoreboard
    if  ( !(ini.score < 2) ) {
        score.textContent = --ini.score;
        message.textContent = text;

        return false;
    }

    score.textContent = --ini.score;
    gameOver();
};
/**
 *
 * # win
 *
 * Winning process
 */
const win = () => {
    message.textContent = 'Hurrah, You won the game! 😍🔥🏎️';
    document.body.style.backgroundColor = '#1fff80';

    btn.setAttribute('disabled', true);
    btn.style.opacity = '0.4';
    number.textContent = ini.randomNumber;

    if (ini.highestScore < ini.score) {
        ini.highestScore = ini.score;

        // update the UI
        highScore.textContent = ini.highestScore;
    }
};

/**
 *
 * # Game
 *
 * will contain all game logic
 */
const game = () => {
    // get the user input
    const input = Number(guess.value);
    const diff = ini.randomNumber - input;

    if (ini.randomNumber === input) {
        win();
        return;
    }

    message.textContent = 'analyzing...'

    let i = 1;
    const x = setInterval(() => {
        message.textContent = 'analyzing'.padEnd(9 + i, '.')
        i++;
    }, 200);

   setTimeout(() => {
       if (diff > 5) {
           hint('Too low! 🤣')
       } else if (diff < -5) {
           hint('Too high! 🤣');
       } else if (diff >= -5 && diff < 0) {
           hint('So close 🔥, Try lower!');
       } else if (diff <= 5 && diff !== 0) {
           hint('So close 🔥, Try higher!')
       } else {
           // do nothing...
       }

       clearInterval(x);
   }, 1100)
}

// event listener
btn.addEventListener('click', game)
again.addEventListener('click', reset);