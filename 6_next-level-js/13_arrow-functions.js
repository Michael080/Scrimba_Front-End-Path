//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
  return "I'm going to eat pizza for lunch";
}

// arrow function
const dinnerMenu = () => "I'm going to eat steak for dinner";
console.log(dinnerMenu());

// arrow function w/ 'custom' shiz
const customDinner = food => `I'm going to eat ${food} for dinner.`;
console.log(customDinner('popcorn'));