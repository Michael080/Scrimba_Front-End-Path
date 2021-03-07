/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const bob = {
  name: 'Bob Dobson',
  age: 50
}

const sally = {
  name: 'Sally'
}

console.log(bob.hasOwnProperty('age'))

function resolved(user, message) {
  console.log(`${user.name} is ${user.age} years old.`);
  console.log(message);
}

function rejected(message) {
  console.log(message);
}

const checkAge = (user) => {
  return new Promise((resolve, reject) => {
    if (user.hasOwnProperty('age')) {
      resolved(user, 'Success!');
    } else {
      rejected('User age data missing :(');
    }
  })
}

checkAge(bob); // => success
checkAge(sally); // => failure
