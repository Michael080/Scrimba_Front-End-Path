// const makeBoard = require('./gameboard/makeBoard.js');

const areaGrid = document.querySelectorAll('.grid');

function makeBoard(array, tempBoard, section = 10) {
    for (let i = 0; i < array.length - 1; i += section) {
        let a = array.slice(i, i + section);
        tempBoard.push(a);
    }
    return tempBoard;
}

let tempGrid = Array.from(areaGrid); //convert node collection
let arrayGrid = new Array;
let snekLand = makeBoard(tempGrid, arrayGrid);

// Create Snek prototype
function Snek(body, position, speed, direction) {
    this.body = body;
    this.position = position;
    this.speed = 0;
    this.direction = direction;
    this.setSnekPlace = function (snekker) {
        this.position = snekker;
    }
}

let snek = new Snek (3,0,1,'down'); //new Snek

Snek.prototype.findSnek = function (board) {
        board.forEach(gridRow => {
        gridRow.forEach(grid => {
            grid.classList.contains('snek') ? (this.setSnekPlace(grid)) : 'no snek'
        });
    }
)}

snek.findSnek(snekLand);
