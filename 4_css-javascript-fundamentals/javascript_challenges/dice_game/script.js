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
let player1 = 0;
let player1Turn = true;
let player2 = 0;


let randNumb = () => {
    return Math.floor((Math.random() * 6) + 1);
}

let updateScore = (player, currentRoll, playerBoard) => {
    player += currentRoll;
    playerBoard.textContent = player;
    return player;
}

let scoring = (player, dice) => {
    let playerRoll = randNumb();
    dice.textContent = playerRoll;
    return playerRoll;
}

function playDice() {
    if (player1Turn) {
        message.textContent = 'Player 1 Turn';

        let playerRoll = scoring(player1, diceOne);
        player1 = updateScore(player1, playerRoll, oneScore);
        player1Turn = false;
        return player1;
    } else {
        message.textContent = 'Player 2 Turn';
        let playerRoll = scoring(player2, diceTwo);
        player2 = updateScore(player2, playerRoll, twoScore);
        player1Turn = true;
        return player2;
    }
}

roll.addEventListener('click', playDice);


// rollDice() - returns random number range 1 - 6

// console.log('rollDice => ', rollDice());
