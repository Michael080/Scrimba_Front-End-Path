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

let displayBtn = button => {
    if (button === roll) {
    toggleElems(reset, roll, 'hidden');
    } else if (button === reset) {
        toggleElems(roll, reset, 'hidden');
    }
}

let updateScore = (player, currentRoll, playerBoard) => {
    player += currentRoll;
    playerBoard.textContent = player;
    console.log(player, 'from upodateScore');
    return player;
}

let updateMessage = mess => message.textContent = mess;

let winner = () => {
    if (player1Turn) {
        updateMessage('Player 1 Wins!!!');
    } else {
        updateMessage('Player 2 Wins!!!');
    }

    displayBtn(reset);
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
        updateMessage('Player 1 Turn');
        let playerRoll = scoring(randNumb(), player1, diceOne, diceTwo, rollOne);
        player1 = updateScore(player1, playerRoll, oneScore);
        checkWin(player1);
        return player1;
    } else {
        updateMessage('Player 2 Turn');
        let playerRoll = scoring(randNumb(), player2, diceTwo, diceOne, rollTwo);
        player2 = updateScore(player2, playerRoll, twoScore);
        checkWin(player2);
        return player2;
    }
}

roll.addEventListener('click', playDice);

let resetGame = () => {
    let negatize = value => value = - value; //create negative of a value
    //reset scores & scoreboard
    let neg1 = negatize(player1);
    let neg2 = negatize(player2);
    player1 = updateScore(player1, neg1 , oneScore);
    player2 = updateScore(player2, neg2, twoScore);
    toggleElems(roll, reset, 'hidden');
    //reset dice display
    let diceAndTurn = (function (...dice) {
        player1Turn = true;
        dice.forEach(die => {
            dieDisplay(die, '-');
        });
    })(rollOne, rollTwo);
    updateMessage('Player 1 Turn');
    displayBtn(roll);
}

reset.addEventListener('click', resetGame);