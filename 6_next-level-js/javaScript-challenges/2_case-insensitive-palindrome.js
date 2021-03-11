function caseInsensitivePalindrome(str) {
  str = str.toLowerCase();
  const reverse = str => Array.from(str).reverse().join('');

  return str === reverse(str);
}

console.log(
  caseInsensitivePalindrome('AaBaa') === true
);

console.log(
  caseInsensitivePalindrome('abac') === false
);


// ------------------------ Scrimba Sol. --------------------------------

function scrimbaCaseInsensitivePalindrome(str) {
  // create new str to 'operate' on:
  // this is a more functional way of doing it
  const caselessStr = str.toLowerCase();
  // used split() as opposed to Array.from()
  const reversedCaselessStr = caselessStr.split('').reverse().join('');

  return caselessStr === reversedCaselessStr;
}

console.log(scrimbaCaseInsensitivePalindrome('abbA'));

// alternate:
// use of split() reverse() join() requires a bit more compute than a loop
let str = 'aBbA';
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);
console.log(reversedStr.toLowerCase());
console.log(str.toLowerCase());
console.log(reversedStr.toLowerCase() === str.toLowerCase());