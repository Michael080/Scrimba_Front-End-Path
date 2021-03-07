/* **Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic. */

export function add(num1, num2) {
  return num1 + num2;
}

export class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  get getName() {
    return this.name;
  }

  get getCountry() {
    return this.country;
  }

  printNameAndCountry() {
    console.log(`${this.getName} was born in ${this.getCountry}`);
  }

  alternatPrintNameAndCountry() {
    console.log(`${this.name} was born in ${this.country}`)
  }
}

export class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  printPlayer(){
    console.log(`${this.getName} is ${this.age} and is awful at tennis.`);
  }
}