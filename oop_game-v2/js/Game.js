/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


"use strict";

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [{ phrase: 'Becoming is better than being' },
        { phrase: 'A company that cannot self-correct cannot thrive' },
        { phrase: 'Teaching is a wonderful way to learn' },
        { phrase: 'A growth mindset is belief you can develop abilities' },
        { phrase: 'You have to work hardest for the things you love most' },
        { phrase: 'This is hard This is fun' },
        { phrase: 'Representation matters' },
        { phrase: 'Dedication hardwork plus patience' },
        { phrase: 'The marathon continues' },
        { phrase: 'You are what you choose to be' },
        { phrase: 'Do not let them dim your light' },
        { phrase: '' },
        { phrase: '' },
        { phrase: '' },
        { phrase: '' },
        { phrase: '' },
        { phrase: '' },
        ];
        this.activePhrase = null;
    }

    startGame() {

    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrases = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrases;
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction() {

    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

    removeLife() {

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon) {

    }
}


