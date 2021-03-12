// For n = 2, the output should be => 99

const num = 2;

function largestNumber(num) {
  const largeInt = '9';
  let result = '';

  for (let i = 0; i < num; i++) {
    result += largeInt;
  }

  return Number(result);
}

console.log(largestNumber(num) === 99);


// ----------------------- Scrimba Sol. ------------------------------
function scrimbaLargestNumber(num) {
  let placeHolder = '';

  for (let i = 0; i < num; i++) {
    placeHolder = placeHolder.concat('9');
  }
console.log(placeHolder);
  return parseInt(placeHolder);
}

console.log(scrimbaLargestNumber(num) === 99);

// &&

function scrimbaLargestNumber2(num) {
  const placeHolder = '9'.repeat(num);

  return parseInt(placeHolder);
}

console.log(scrimbaLargestNumber2(num) === 99);