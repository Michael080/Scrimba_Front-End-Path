/* **Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;
*/

// import { blammo } from './exampleExport.js';

// const result = add(1, 2);
// console.log(`result = ${result}`);

// console.log(blammo);

import { Animal, Cat, Cat2 } from './exampleExport.js';

const cat = new Animal('Cat', 4);
cat.legs = 8;

// plain-ol' method
cat.makeNoise('bark!!!');
// static method
console.log(Animal.return10()); // uninstantiated & it works!
// get method
console.log(cat.metaData); // doesn't work with parenthesis()

// extension of Animal - Cat
const meowzers = new Cat('Tabby', 4, true);
console.log(meowzers.tail);
console.log(meowzers.makeNoise());

// alternate extension of Animal - Cat2
const abu = new Cat2('cat', 2);
console.log('Cat2 --- abu:', abu.makeNoise('woof!!!'));
// type/legs, metaData were not 'explicitly' defined w/in the
// extended class but were inherited
console.log(abu.metaData); 