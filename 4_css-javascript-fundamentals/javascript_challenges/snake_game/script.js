// const makeBoard = require('./gameboard/makeBoard.js');
const areaGrid = document.querySelectorAll('.grid');

// Take areaGrid and slice into sections based on desired 'gameboard' width
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
function Snek(size, position, speed, direction, restrict, boundCheck, ded) {
    this.size = size;
    this.position = position;
    this.speed = 500;
    this.direction = 'left';
    this.restrict = {
        movement: false
    };
    this.boundCheck = boundCheck;
    this.ded = false;


    this.setSnekPlace = function (snekGrid, snekRow, gameBoard) {
        this.position = {
            //store nodes in 'dom' and corresponding indices in x/y
            row: {
                dom: snekRow,
                y: gameBoard.indexOf(snekRow) // Y-COORD
            },
            grid: {
                dom: snekGrid,
                x: gameBoard[gameBoard.indexOf(snekRow)].indexOf(snekGrid) // X-COORD
            }
        };
    }
    //Takes 'game board' & snek position via grid/row and returns an object whose property
    //specs type of out-of-bounds condition and a bool value
    this.checker = function (grid, row, board) {
        const xBound = this.position.row.dom.length - 1;
        const yBound = board.length - 2;
        // TODO --- Use Map instead of Object
        // Check for out-of-bound conditions on x/y axis
        const lessX = {lessX: grid < 0};
        let greatX;
        // Prevent producing true evaluation of greatX when snek is moving 'down-map'
        this.direction === 'right' ? (greatX = {greatX: grid > xBound}) : (greatX = {greatX: false});
        const lessY = {lessY: row < 0};
        const greatY = {greatY: row > yBound};
        let allResults = [lessX, greatX, lessY, greatY]; // Store results
        let finalResult = new Array;
        // Takes array of objects and returns any object with property value: true
        for (var index in allResults) {
            let key = Object.keys(allResults[index]);
            for (var obj in index) {
                let value = allResults[index][key];
                value === true ? finalResult.push(allResults[index]) : 'finalResult === false';
            }
        }
        return finalResult;
    } //<----- end of checker()

    // Updates restrict property with bool and restricted direction if applicable
    // snek.outOfBound(newPos, snek.position.row.y, snekLand);
    //newPos --- array index
    //snek.position.row.y --- index of array in snekLand
    this.outOfBound = function (grid, row, board) {
        const result = this.checker(grid, row, board);

            const restrictWhich = {
                lessX: () => snek.restrict = {
                    movement: true,
                    dir: 'left'
                },
                // TODO --- Fix Bug - snek out of bounds NO game abort - Not returning on out of bound conditions
                greatX: () => snek.restrict = {
                    movement: true,
                    dir: 'right'
                },
                lessY: () => snek.restrict = {
                    movement: true,
                    dir: 'up'
                },
                // TODO --- Fix Bug - snek out of bounds NO game abort - Not returning on out of bound conditions
                greatY: () => snek.restrict = {
                    movement: true,
                    dir: 'down'
                },
                //if no cases match return value 'false'
                defaultResult: () => snek.restrict = {
                    movement: false
                }
            }

        try{
            let key = Object.keys(result[0]);
            result[0][key] === true ? restrictWhich[key]() : restrictWhich['defaultResult']; // Set restrict property
        } catch(err) {
            restrictWhich['defaultResult'];
        }
    }

    this.stopSnek = () => {
        this.restrict.movement = true;
        return this;
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
        const currentCoords = {
            row: this.position.row.y,
            grid: this.position.grid.x
        }

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

        const checkSwitch = {
            left: () => {
                const newCoords = {
                    row: currentCoords.row,
                    grid: this.position.grid.x - 1
                };

                return newCoords;
            },
            right: () => {
                const newCoords = {
                    row: currentCoords.row,
                    grid: this.position.grid.x + 1
                };

                return newCoords;
            },
            left: () => {
                const newCoords = {
                    row: currentCoords.row,
                    grid: this.position.grid.x - 1
                };

                return newCoords;
            },
            up: () => {
                const newCoords = {
                    row: this.position.row.y - 1,
                    grid: currentCoords.grid
                };

                return newCoords;
            },
            down: () => {
                const newCoords = {
                    row: this.position.row.y + 1,
                    grid: currentCoords.grid
                };

                return newCoords;
            }
        }
        return posSwitch[dir];
    } // <----- end of newPos()
 }

// Create snek, set position and moves
const snek = new Snek (3,3000,500,'left'); //new Snek
snek.findSnek(snekLand); //set snek.position
// * TODO---Implement in prototype & use in outOfBound() //
// Calc next grid position based on move direction and current position
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

// Functions for toggling CLASSES and IDs
const toggleClass = (elem, selector = 'tail') => elem.classList.toggle(selector);

// Adds class-'tail' and sets timer to remove after spec'd time
const setTail = (elem, selector) => {
   toggleClass(elem, selector); //add 'tail'
}

const toggleID = (elem, selector = '') => elem.id = selector;
snek.firstMove = true;

// add new 'snek' and turn 'old snek' into a 'tail'
const toggleSnek = ( currPos, nextPos ) => {
    toggleID(currPos); //remove id-'snek'
    setTail(currPos, 'tail'); //add class-'tail'
    toggleID(nextPos, 'snek'); //New snek is created
    setTimeout(() => toggleClass(nextPos, 'tail'), snek.speed * (snek.size));

    if (snek.firstMove === true) {
        initialDraw();
        setTimeout(() => toggleClass(currPos, 'tail'), snek.speed * (snek.size - 1));
       return snek.firstMove = false;
    }
}

const setTailPos = (snek) => {
    console.log('drawing snek...');
    const tail = length => {
        let referencePoint = snek.position.row.y;
        let snekTail = [];
        for (let i = 0; i < length - 1; i ++) {
            let tailPos = referencePoint + 1;
            let tail = snek.position.row.dom[tailPos];
            snekTail.push(tail);
            referencePoint = tailPos;
        }
        snek.initialTailPos = snekTail;
    }
    return tail(snek.size);
}
// TODO --- move execution somewhere else in flow
// setTailPos(snek); //draw snek

// Validate move
const isValidMove = function (dir) {
    const newPos = snek.moves[dir]();
    // Check next snek-position: if out-of-bounds & update snek.restrict v/ validation
    snek.outOfBound(newPos, snek.position.row.y, snekLand);
}

function goTimer(ref, timerType, comm, speed = snek.speed) {
    const comms = {
        start: () => timerType(() => toggleSnek(pos, nextPos), snek.speed),
        stop:  () => clearInterval(ref)
    }
    // const comms = {
    //     start: () => console.log('HELLO from goTimer() !!!!!'),
    //     stop:  () => clearInterval(ref)
    // }
    return comms[comm]();
}

// let mine;
// mine = timer(mine, 'start');
// timer(mine, 'stop');
// clearInterval(mine);

// snekGo = goTimer(snekGo, setTimeout, 'start');
// TODO --- initialDraw() should be a method on Snek proto
//      - toggle utilities must ALSO be methods on Snek proto
function initialDraw() {
    //set position & draw the rest of Snek body:
    setTailPos(snek);
    const tail1 = snek.initialTailPos[0];
    const tail2 = snek.initialTailPos[1];
    //draw tail and set timers to 'fade' display:
    toggleClass(tail1, 'tail'); //draw 'tail'
    toggleClass(tail2, 'tail'); //draw 'tail'
    setTimeout(() => toggleClass(tail1, 'tail'), snek.speed * (snek.size - 2));
    toggleClass(tail2, 'tail');
    delete snek.initialTailPos; //remove property from Snek object
}

let timer = setInterval(move, snek.speed); //set movement based on snek.speed

function move() {
    const x = snek.position.grid.x;
    const y = snek.position.row.y;
    isValidMove(snek.direction); //validate move
    if (snek.restrict.movement === false) {
        //set snek.position to grid location containing id #snek
        let pos = snek.position.grid.dom;
        let nextPos = snek.newPos(snek.direction);
        //set nextPos w/ id #snek, remove #snek from pos & swap w/ class .tail
        toggleSnek(pos, nextPos);
        snek.findSnek(snekLand); //reset snek.position
    }else {
    //    GAME OVER
        snek.stopSnek();
        snek.ded = true;
        console.log('Snek Ded :(');
        clearInterval(timer);
        return clearInterval(timer);
    }
}

const moveOverride = (input) => {
    snek.direction = input;
    const x = snek.position.grid.x;
    const y = snek.position.row.y;
    isValidMove(input); //validate move
    if (snek.restrict.movement === false) {
        let pos = snek.position.grid.dom;
        let nextPos = snek.newPos(snek.direction);
        toggleSnek(pos, nextPos);
        snek.findSnek(snekLand);
        // setInterval(move(snek.direction), 500);
    }else {
        //    GAME OVER
        console.log('Snek Ded :(');
        return clearInterval(moveTimer);
    }
}

const snekControl = function(event) {
    snek.direction = event.slice(5, input.length - 1);
}

function validateInput(input) {
    const valid = ['right', 'left', 'up', 'down'];
    return valid.includes(input);
}

window.addEventListener('keydown', function(event) {
    // capture input string and format
    let eventStr = event.key;
    const formatStr = eventStr.slice(5, eventStr.length).toLowerCase();
    // log error if input is not an arrow key otherwise update snek.direction
    if(validateInput(formatStr)) {
        snek.direction = formatStr;
    } else {
        console.log('invalid input: ', event.key);
    }

});

function clearTimer(timer) {
    return clearInterval(timer);
}

//--------------------------------------------------
// TESTS:
// module.exports = snek;