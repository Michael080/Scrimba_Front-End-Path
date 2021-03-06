/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

// sol. #1
const buyStuff = (stuff = "I'm going to buy stuff") => {
  const message =  `I'm going to buy ${stuff} at the store.`;
  stuff === "I'm going to buy stuff" ? console.log(stuff) : console.log(message);
}

buyStuff('blammo'); // => I'm going to buy blammo at the store


// sol. #2
// this looks more betterest than sol.1 but doesn't use default params
function buy(stuff) {
  stuff ? 
    console.log(`I'm going to buy ${stuff} at the store.`) : 
    console.log("I'm going to buy stuff at the store");
}

buy('wammos');

console.log("w/out stuff");
buy();


// sol. #3
// THIS is it
function shopping(food = 'something') {
  console.log(`I'm going to buy ${food} from the grocery shop`);
}

shopping("eggs");
shopping();