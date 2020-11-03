// const makeBoard = require('./gameboard/makeBoard.js');

const areaGrid = document.querySelectorAll('.grid');

const makeBoard = (array, tempBoard, section = 10) => {
    for (let i = 0; i < array.length - 1; i += section) {
        let a = array.slice(i, i + section);
        tempBoard.push(a);
    }
    return tempBoard;
}

const tempGrid = Array.from(areaGrid); //convert node collection
const arrayGrid = new Array;
const snekLand = makeBoard(tempGrid, arrayGrid);

// Create Snek prototype
function Snek(size, position, speed, direction, restrict, boundCheck) {
    this.size = size;
    this.position = position;
    this.speed = 0;
    this.direction = direction;
    this.restrict = {
        movement: false
    };
    this.boundCheck = boundCheck;

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
    //Takes 'game board' & snek position via grid/row and returns an object whose property
    //specs type of out-of-bounds condition and a bool value
    this.checker = function (grid, row, board) {
        const rowBound = this.position.row.dom.length - 1;
        // Check for out-of-bound conditions on x/y axis
        const lessX = {lessX: grid < 0};
        const greatX = {greatX: grid > rowBound};
        const lessY = {lessY: row < 0};
        const greatY = {greatY: row > board.length -1};
        let allResults = [lessX, greatX, lessY, greatY]; // Store results
        let finalResult = new Array;
        // Takes array of objects and returns any object with property value: true
        for (var index in allResults) {
            let key = Object.keys(allResults[index]);
            for (var obj in index) {
                let value = allResults[index][key];
                value === true ? finalResult.push(allResults[index]) : finalResult.push(false);
            }
        }

        return finalResult;
    }

    // Updates restrict property with bool and restricted direction if applicable
    this.outOfBound = function (grid, row, board) {
        const result = this.checker(grid, row, board);
        // ! TODO --- Remove conditional - defaultResult should stop execution in move()

            const restrictWhich = {
                lessX: () => snek.restrict = {
                    movement: true,
                    dir: 'left'
                },
                greatX: () => snek.restrict = {
                    movement: true,
                    dir: 'right'
                },
                lessY: () => snek.restrict = {
                    movement: true,
                    dir: 'up'
                },
                greatY: () => snek.restrict = {
                    movement: true,
                    dir: 'down'
                },
                //if no cases match return value 'false'
                defaultResult: () => snek.restrict = {
                    movement: false
                }
            }

            let key = Object.keys(result[0]);
            result[0][key] === true ? restrictWhich[key]() : restrictWhich['defaultResult']; // Set restrict property
    }

    this.findSnek = function (board) {
        board.forEach(gridRow => {
                gridRow.forEach(grid => {
                    if(grid.id === 'snek') {
                        this.setSnekPlace(grid, gridRow, board); //store grid and row location of Snek
                    }
                });
            }
        )}

        // Returns DOM element corresponding to left/right/up/down
        this.newPos = function (dir) {
        const left = () => snekLand[snek.position.row.y][snek.position.grid.x - 1];
        const right = () => snekLand[snek.position.row.y][snek.position.grid.x + 1];
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

// Create snek, set position and moves
const snek = new Snek (1,0,1,'down'); //new Snek
snek.findSnek(snekLand); //set snek.position
//TODO---Implement in prototype & use in outOfBound()
snek.moves = {
    left: function () {
        return snek.position.grid.x - 1;
    },
    right: function () {
        return snek.position.grid.x + 1;
    },
    up: function () {
        return snek.position.row.y - 1;
    },
    down: function () {
        return snek.position.row.y + 1;
    }
}
// *? Return here
const isValidMove = function (dir) {
    const newPos = snek.moves[dir]();
    console.log(newPos);
    snek.outOfBound(newPos, snek.position.row.y, snekLand);
}



snek.speed = 4000;

// Check next snek-position: if out-of-bounds
// Calc next grid based on move direction and current position



// Functions for toggling CLASSES and IDs
const toggleClass = (elem, selector = 'tail') => elem.classList.toggle(selector);

const tailExpire = tailNode => window.setTimeout(toggleClass, snek.speed, tailNode, 'tail');
// Adds class-'tail' and sets timer to remove after spec'd time
const setTail = (elem, selector) => {
    toggleClass(elem, selector); //add 'tail'
    tailExpire(elem); //TODO --- Add param to definition - param:time
}
const toggleID = (elem, selector = '') => elem.id = selector;

// add new 'snek' and turn 'old snek' into a 'tail'
const toggleSnek = ( currPos, nextPos ) => {
    toggleID(currPos); //remove id-'snek'
    setTail(currPos, 'tail'); //add class-'tail'
    toggleID(nextPos, 'snek'); //New snek is created
}

// const checkValue = dir => snek.restrict.dir === dir ? true : false;
// const checkValue2 = dir => {
//     snek.restrict.movement === true ?
// }

const move = input => {
    snek.direction = input;
    const x = snek.position.grid.x;
    const y = snek.position.row.y;
    // const restrict = snek.outOfBound(x, y, snekLand);
    // console.log('snek.restrict.dir:', snek.restrict.dir);
    // console.log('n(input):', n(input));
    isValidMove(input);

    if (snek.restrict.movement === false) {
        let pos = snek.position.grid.dom;

        let nextPos = snek.newPos(snek.direction);
        // toggle(pos, 'tail');
        // toggle(nextPos, 'snek');
        toggleSnek(pos, nextPos);
        console.log(snek.position.grid.x);
        snek.findSnek(snekLand);
        console.log(snek.position.grid.x);
        // n(input);
        // setInterval(move(snek.direction), 500);
    }else {
    //    GAME OVER
        console.log('Snek Ded :(');
    }

}
// console.log(snek.position.grid.x);
move('left');
move('left');
move('left');
move('left');
move('left');

// move('right');
// move('up');
// move('down');

//--------------------------------------------------
// TESTS:
// module.exports = snek;