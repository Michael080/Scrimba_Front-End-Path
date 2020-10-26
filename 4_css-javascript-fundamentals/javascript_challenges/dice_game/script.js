const message = document.querySelector('.message');
const roll = document.querySelector('.roll');
const reset = document.querySelector('#reset');
//player one stats
const scoreOne = document.querySelector('.score-1'); //select entire score node
const oneScore = document.querySelector('.player-one-score'); //select just the points
const diceOne = document.querySelector('.dice-one');
const rollOne = document.querySelector('.roll-value-one');
//player two stats
const scoreTwo = document.querySelector('.score-2'); //select entire score node
const twoScore = document.querySelector('.player-two-score'); //select just the points
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

let turn = () => (player1 === 0) ? player1Turn = true : player1Turn = !player1Turn;

let updateScore = (player, currentRoll, playerBoard) => {
    player += currentRoll;
    playerBoard.textContent = player;
    return player;
}

let fillMessTxt = mess => message.textContent = mess;

let winner = () => {
    if (player1Turn) {
        fillMessTxt('Player 1 Wins!!!');
    } else {
        fillMessTxt('Player 2 Wins!!!');
    }
    message.classList.toggle('win-message');  //scale font-size up
    displayBtn(reset);
}

let checkWin = score => {
    (score >= 10) ? winner() : '';
}

let dieDisplay = (die, val) => die.textContent = val;

let scoring = (roll = randNumb(), player, currDice, otherDice, diceValue, currScore, otherScore) => {
    let playerRoll = roll;
    dieDisplay(diceValue, playerRoll);
    toggleElems(currDice, otherDice, 'active');
    toggleElems(currScore, otherScore, 'score-in-play');
    return playerRoll;
}

function playDice() {
    turn();
    if (player1Turn) {
        fillMessTxt('Player 1 Turn');
        let playerRoll = scoring(randNumb(), player1, diceOne, diceTwo, rollOne, scoreOne, scoreTwo);
        player1 = updateScore(player1, playerRoll, oneScore);
        checkWin(player1);
        return player1;
    } else {
        fillMessTxt('Player 2 Turn');
        let playerRoll = scoring(randNumb(), player2, diceTwo, diceOne, rollTwo, scoreTwo, scoreOne);
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
    let resetDice = (function (...dice) {
        dice.forEach(die => {
            dieDisplay(die, '-');
        });
    })(rollOne, rollTwo);
    //reset message text
    fillMessTxt('Player 1 Turn');
    message.classList.toggle('win-message');
    displayBtn(roll);
}

reset.addEventListener('click', resetGame);