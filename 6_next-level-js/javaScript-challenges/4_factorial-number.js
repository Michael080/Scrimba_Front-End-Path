/* 
Return the factorial of the provided integer.
If the integer is represented w/ the letter n, a factorial
is the produce of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!
*/

function factorialNumber(num) {
  let result = 1;

  if (num === 0) {
    console.log('Please enter a positive number -');
    return;
  }
  
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialNumber(3));
console.log(factorialNumber(5));