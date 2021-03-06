let numArray = [1,2,3,4,5];

// old-school way of finding val in array:
console.log(numArray.indexOf(0)); // => -1 --- 0 is not in this array
// OR
console.log(numArray.includes(0)); // => false --- mo' betterer :)
// Note: includes is not supported by IE...this doesn't matter