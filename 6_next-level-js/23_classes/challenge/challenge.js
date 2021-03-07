/* **Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic. */

import { add, Player, TennisPlayer } from './module.js'

console.log(add(1, 100));

const bob = new Player('Bob Dobson', 'USA');

// console.log(bob.name, bob.country);
// console.log(bob.getName) // no parenthesis!!!
// console.log(bob.getCountry); // no parenthesis!!!
bob.printNameAndCountry();

const pope = new TennisPlayer('Pope', 'Brazil', 85);
console.log(pope);
console.log(pope.printPlayer());