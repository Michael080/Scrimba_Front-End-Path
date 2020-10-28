const makeBoard = require('model/makeBoard.js');

const areaGrid = document.querySelectorAll('.grid');

let tempGrid = Array.from(areaGrid); //convert node collection
let arrayGrid = new Array;
let snekLand = makeBoard(tempGrid, arrayGrid);

// Create Snek prototype
function Snek(body, position, speed, direction) {
    this.body = body;
    this.position = position;
    this.speed = 0;
    this.direction = direction;
}

let snek = new Snek (3,0,1,'down'); //new Snek

// function add(num1, num2) {
//     return num1 + num2;
// }
//
// module.exports = add;