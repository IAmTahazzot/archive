'use strict';

// helper functions
const $ = text => document.querySelector(text);

// select necessary elements
const score_0 = $('#score--0');
const score_1 = $('#score--1');
const current_0 = $('#current--0');
const current_1 = $('#current--1');
const player_0 = $('.player--0');
const player_1 = $('.player--1');

const btn_hold = $('.btn--hold');
const btn_roll = $('.btn--roll');
const btn_new = $('.btn--new');

const dice = $('.dice');


class PigGame {

    constructor() {
        this.currentPlayer = -1;
        this.currentScore = 0;
        this.score = {
            player_0: 0,
            player_1: 0,
        };
        this.winningPoint = 100;
    }

    init() {
        // set initial UI
        score_0.textContent = this.score.player_0;
        score_1.textContent = this.score.player_1;

        current_0.textContent = 0;
        current_1.textContent = 0;
        dice.classList.add('hidden');

        // initialize
        this.handler();
    }

    handler() {
        btn_new.addEventListener('click', this.start.bind(this));
        btn_roll.addEventListener('click', this.roll.bind(this));
        btn_hold.addEventListener('click', this.hold.bind(this));
    }

    shouldStart() {
        if (this.currentPlayer < 0) {
            swal('No player is active', 'Press the new game button to start' +
                ' a game', 'error');
            return false;
        }

        return true;
    }

    roll() {
        if (!this.shouldStart()){
            return false;
        }

        // generate random number
        const number = Math.floor(Math.random() * 6) + 1;

        dice.classList.remove('hidden');
        dice.setAttribute('src', 'dice-' + number + '.png');

        if (number === 1) {
            this.switchPlayer();
            return;
        }

        // set the value to the current user
        this.currentScore += number;
        // update current player score

        this.currentPlayer === 0 ?
            current_0.textContent = this.currentScore :
            current_1.textContent = this.currentScore;


    }

    start() {
        this.score = {
            player_0: 0,
            player_1: 0,
        };
        this.currentScore = 0;
        this.currentPlayer = 0;

        // update ui
        score_0.textContent = 0;
        score_1.textContent = 0;

        current_0.textContent = 0;
        current_1.textContent = 0;

        dice.classList.add('hidden');

        $('.player--' + this.currentPlayer).classList.add('player--active');
        if (player_1.classList.contains('player--active')) {
            player_1.classList.remove('player--active');
        }
    }

    switchPlayer() {
        // remove current player active status
        // this.currentPlayer === 0 ? player_0.classList.remove('player--active') :
        //     player_1.classList.remove('player--active');
        if (this.currentPlayer < 0) {
            return;
        }
        this.currentScore = 0;

        if (this.currentPlayer === 0) {
            player_0.classList.remove('player--active');
            player_1.classList.add('player--active');

            current_0.textContent = 0;
        } else {
            player_0.classList.add('player--active');
            player_1.classList.remove('player--active');
            current_1.textContent = 0;
        }

        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }

    hold(e) {

        if (this.shouldStart() === false) {
            return false;
        }

        if (this.currentPlayer === 0) {
            this.score.player_0 += this.currentScore;
            score_0.textContent = this.score.player_0;
        } else {
            this.score.player_1 += this.currentScore;
            score_1.textContent = this.score.player_1;
        }

        this.checkWinner( this.currentPlayer , e);
        this.switchPlayer();
    }

    checkWinner( playerID, e) {

        if (this.winningPoint > this.score['player_' + playerID]) {
            return false;
        }

        // someone won the game
        party.sparkles(e);
        party.confetti(e);
        swal(`Player ${this.currentPlayer + 1} won the game`, '🔥🏆❤️', 'success');

        this.currentPlayer = -1;

        debugger;
        console.log(this.currentPlayer);

    }
}


const game = new PigGame();
game.init();



