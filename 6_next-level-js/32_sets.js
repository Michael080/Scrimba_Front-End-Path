const exampleSet = new Set([1,1,1,1,2,2,2,2]);
exampleSet.add(5);
console.log(exampleSet.has(5)); // => true
console.log(exampleSet.delete(5)); // => true - deletes all occurences!
console.log(exampleSet.has(5)); // => false
exampleSet.add(6)

console.log(exampleSet);
console.log(exampleSet.size); // => 2 - unique values
console.log(exampleSet.length); // => undefined

exampleSet.clear();
console.log(exampleSet.size); // => 0
