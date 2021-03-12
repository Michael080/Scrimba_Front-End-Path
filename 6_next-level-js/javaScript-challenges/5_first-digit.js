// find the leftmost digit that occurs in a given string 

function firstDigit(str) {
  const regEx = /\d+/;
  const result = str.match(regEx);

    if (result != null) {
      const index = result.index;

      return str[index];
    } else {
      return false;
    }
}

console.log(firstDigit('var_1__Int2') === '1');


// ---------------------- Round 2 ------------------------------

function round2FirstDigit(str) {
  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let char of str) {
    console.log(char);
    for (let nums of strNums) {
      if (char === nums) {
        return char;
      }
    }
  }

  return false;
}

console.log(round2FirstDigit('var_1__Int2') === '1');



// ---------------------- Scrimba Sol. ------------------------------
function scrimbaFirstDigit(str) {
  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const chars = str.split('');
  
  for(const char of chars) {
      if(strNums.includes(char)) {
          return char;
      }
  }
}

console.log(scrimbaFirstDigit('var_1__Int2') === '1');