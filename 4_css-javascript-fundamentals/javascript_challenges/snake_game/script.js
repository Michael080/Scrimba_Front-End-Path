const areaGrid = document.querySelectorAll('.grid');

let snek = {
    body: 3,
    position: 0, //make
    speed: 1,
    direction: 'down',
}

// Slice grid into 10-index sections and store
let makeBoard = (array, tempBoard, section = 10) => {
    for (let i = 0; i < array.length - 1; i += section) {
        // var a = new Array;
        // a.push(array.slice(i, i + section));
        let a = array.slice(i, i + section);
        tempBoard.push(a);
        console.log(a);
    }
    return tempBoard;
}

let tempGrid = Array.from(areaGrid); //convert node collection
let arrayGrid = new Array;
let snekLand = makeBoard(tempGrid, arrayGrid);
