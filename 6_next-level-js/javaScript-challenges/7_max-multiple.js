// Given a divisor and a bound, find the largest integer N such that:

// * N is divisible by divisor
// * N is less than or equal to bound
// * N is greater than 0

function maxMultiple(divisor, bound) {
  let result;
  const getMultiply = i => i * divisor;
  
  for (let i = 0; getMultiply(i) <= bound; i++) {
    result = getMultiply(i);
  }

  return result;
}

console.log(maxMultiple(3, 10) === 9);


// ------------------------ Scrimba Sol. -------------------------------------
// Clever as fuck!
// My solution was brute-force as fuck though...

function scrimbaMaxMultiple(divisor, bound) {
  const remainder = bound % divisor;
    
  return bound - remainder;
}

console.log(scrimbaMaxMultiple(3, 10) === 9);