// function encloseInBrackets(str) {
//   let bracketized = '(';
//   bracketized += str;
//   console.log(bracketized);
//   bracketized += ')';
//   return bracketized;
// }

// console.log(encloseInBrackets('Yo') === '(Yo)');


function encloseInBrackets(str) {
  let bracketized = '(';
  for (let i = 0; i < str.length; i++) {
    bracketized += str[i];
  }
  bracketized += ')';

  return bracketized;
}

console.log(encloseInBrackets('Yo') === '(Yo)');


// function encloseInBrackets(str) {  
//   return '(' + str + ')';
// }

// console.log(encloseInBrackets('Yo') === '(Yo)');

// function encloseInBrackets(str) {  
//   return `(${str})`;
// }

// console.log(encloseInBrackets('Yo') === '(Yo)');

// function encloseInBrackets(str) {  
//   return `(${str})`;
// }

// console.log(encloseInBrackets('Yo') === '(Yo)');
