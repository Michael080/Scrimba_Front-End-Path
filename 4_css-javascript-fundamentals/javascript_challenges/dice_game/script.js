const message = document.querySelector('.message');
const roll = document.querySelector('.roll');
const reset = document.querySelector('reset');
//player one stats
const oneScore = document.querySelector('.player-one-score');
const diceOne = document.querySelector('.dice-one');
//player two stats
const twoScore = document.querySelector('.player-two-score');
const diceTwo = document.querySelector('.dice-two');

// game stats
player1 = 0;
player1Turn = true;
player2 = 0;

// rollDice() - returns random number range 1 - 6
let rollDice = () => {
    return Math.floor((Math.random() * 6) + 1);
}

console.log('rollDice => ', rollDice());
