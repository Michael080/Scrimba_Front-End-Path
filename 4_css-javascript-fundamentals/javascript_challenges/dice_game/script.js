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
let player1Turn = false;
let player2 = 0;

let randNumb = () => {
    return Math.floor((Math.random() * 6) + 1);
}

let toggleElems = (currNode, otherNode) => {
    currNode.classList.add('active');
    otherNode.classList.remove('active');
};

let updateScore = (player, currentRoll, playerBoard) => {
    player += currentRoll;
    playerBoard.textContent = player;
    return player;
}

let scoring = (player, currDice, otherDice) => {
    let playerRoll = randNumb();
    currDice.textContent = playerRoll;
    toggleElems(currDice, otherDice);
    return playerRoll;
}

function playDice() {
    player1Turn = !player1Turn;
    if (player1Turn) {
        message.textContent = 'Player 1 Turn';
        let playerRoll = scoring(player1, diceOne, diceTwo);
        player1 = updateScore(player1, playerRoll, oneScore);
        return player1;
    } else {
        message.textContent = 'Player 2 Turn';
        let playerRoll = scoring(player2, diceTwo, diceOne);
        player2 = updateScore(player2, playerRoll, twoScore);
        return player2;
    }
}

roll.addEventListener('click', playDice);