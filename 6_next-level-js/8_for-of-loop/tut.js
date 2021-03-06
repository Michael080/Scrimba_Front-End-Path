// for of loops
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  total += income;
}

console.log(total); // => 204000


// loop over string
let fullName = 'Dylan Coding God Israel';

for (const char of fullName) {
  console.log(char);
}