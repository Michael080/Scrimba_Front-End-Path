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

    this.setSnekPlace = function (snekGrid, snekRow, gameBoard) {
        this.position = {
            //store nodes in 'dom' and corresponding indices in x/y
            row: {
                dom: snekRow,
                y: gameBoard.indexOf(snekRow)
            },
            grid: {
                dom: snekGrid,
                x: gameBoard[gameBoard.indexOf(snekRow)].indexOf(snekGrid)
            }
        };
    }

    this.findSnek = function (board) {
        board.forEach(gridRow => {
                gridRow.forEach(grid => {
                    if(grid.classList.contains('snek')) {
                        this.setSnekPlace(grid, gridRow, board); //store grid and row location of Snek
                    }
                });
            }
        )}
        // Returns DOM element corresponding to left/right/up/down
        this.newPos = function (dir) {
        const left = () => snek.position.grid.dom.previousElementSibling;
        const right = () => snek.position.grid.dom.nextElementSibling;
        const up = () => snekLand[snek.position.row.y - 1][snek.position.grid.x];
        const down = () => snekLand[snek.position.row.y + 1][snek.position.grid.x];

        const posSwitch = {
            left: left(),
            right: right(),
            up: up(),
            down: down()
        };

        return posSwitch[dir];
    }
}

let snek = new Snek (3,0,1,'down'); //new Snek
snek.findSnek(snekLand); //set snek.position