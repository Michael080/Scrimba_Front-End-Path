const message = document.querySelector('.message');
const roll = document.querySelector('.roll');
const reset = document.querySelector('#reset');
//player one stats
const oneScore = document.querySelector('.player-one-score');
const diceOne = document.querySelector('.dice-one');
const rollOne = document.querySelector('.roll-value-one');
//player two stats
const twoScore = document.querySelector('.player-two-score');
const diceTwo = document.querySelector('.dice-two');
const rollTwo = document.querySelector('.roll-value-two');
// game stats
let player1 = 0;
let player1Turn = false;
let player2 = 0;
let maxScore = 10;

let randNumb = () => Math.floor((Math.random() * 6) + 1);

let toggleElems = (onNode, offNode, cssClass) => {
    onNode.classList.add(cssClass);
    offNode.classList.remove(cssClass);
};

let toggleClasses = (elem, ...classes) => classes.forEach(c => elem.classList.toggle(c));

let updateScore = (player, currentRoll, playerBoard) => {
    player += currentRoll;
    playerBoard.textContent = player;
    return player;
}

let winner = () => {
    if (player1Turn) {
        message.textContent = 'Player 1 Wins!!!';
    } else {
        message.textContent = 'Player 2 Wins!!!';
    }
    // hide roll button and show reset
    toggleClasses(reset, 'hidden');
    toggleClasses(roll, 'roll');
}

let checkWin = score => {
    (score >= 10) ? winner() : (console.log(`player1: ${player1} player2: ${player2}`));
}

let dieDisplay = (die, val) => die.textContent = val;

let scoring = (roll = randNumb(), player, currDice, otherDice, diceValue) => {
    let playerRoll = roll;
    dieDisplay(diceValue, playerRoll);
    toggleElems(currDice, otherDice, 'active');
    return playerRoll;
}

function playDice() {
    player1Turn = !player1Turn;
    if (player1Turn) {
        message.textContent = 'Player 1 Turn';
        let playerRoll = scoring(randNumb(), player1, diceOne, diceTwo, rollOne);
        player1 = updateScore(player1, playerRoll, oneScore);
        checkWin(player1);
        return player1;
    } else {
        message.textContent = 'Player 2 Turn';
        let playerRoll = scoring(randNumb(), player2, diceTwo, diceOne, rollTwo);
        player2 = updateScore(player2, playerRoll, twoScore);
        checkWin(player2);
        return player2;
    }
}

roll.addEventListener('click', playDice);

let resetGame = () => {
    let players = [
        playaUno = {
            player: player1,
            dice: '-',
            board: oneScore,
            diceDOM: diceOne

        },
        playaDos = {
            player: player2,
            dice: '-',
            board: twoScore,
            diceDOM: diceTwo
    }];

    let negatize = value => value = - value; //create negative of a value

    players.forEach(function(player) {
    updateScore(player.player, negatize(player.player), player.board);
    toggleElems(roll, reset, 'hidden');
});

    let diceAndTurn = (function (...dice) {
        dice.forEach(die => {
            dieDisplay(die, '-');
        });
    })(rollOne, rollTwo);
}

reset.addEventListener('click', resetGame);