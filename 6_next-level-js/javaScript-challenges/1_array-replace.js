/* 
Given an array of integers, replace all the occurences of
elemToReplace with substitutionElem

Ex:
For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3,
the output should be - 
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]
*/

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

function arrayReplace(array, elemToReplace, substitutionElem) {
  let result = [];

    array.forEach(i => {
      let index = array.indexOf(i);
      i === elemToReplace ? array[index] = substitutionElem : 'next';
    })

    return array;
  }

console.log(arrayReplace(array, elemToReplace, substitutionElem))
console.log(arrayReplace(array, elemToReplace, substitutionElem)[0] === 3);
console.log(arrayReplace(array, elemToReplace, substitutionElem)[1] === 2);
console.log(arrayReplace(array, elemToReplace, substitutionElem)[2] === 3);


// -------------------------- ROUND 2 ------------------------------- 

const arr = [1, 2, 1];
const replace = 1;
const sub = 3;

function arrReplace(arr, replace, sub) {
  const checkItem = (item) => item === replace;
  const replacer = (item) => checkItem(item) ? sub : item;
  const map1 = arr.map(x => checkItem(x) ? x = sub : x);


  console.log(map1);
  console.log(map1);

  return map1;
}

console.log(arrReplace(arr, replace, sub));
console.log(arrReplace(arr, replace, sub)[0] === 3);
console.log(arrReplace(arr, replace, sub)[1] === 2);
console.log(arrReplace(arr, replace, sub)[2] === 3);


// -------------------------- Scrimba Sol. ------------------------------- 

// Simple for-loop does the job here:

// function arrayReplace(array, elemToReplace, substitutionElem) {
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] === elemToReplace) {
//       array[i] = substitutionElem;
//     }
//   }
// }
