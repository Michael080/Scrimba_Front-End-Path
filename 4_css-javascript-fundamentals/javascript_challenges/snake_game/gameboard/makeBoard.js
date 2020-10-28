// Slice grid into 10-index sections and store

function makeBoard(array, tempBoard, section = 10) {
    for (let i = 0; i < array.length - 1; i += section) {
        let a = array.slice(i, i + section);
        tempBoard.push(a);
    }
    return tempBoard;
}

module.exports = makeBoard;