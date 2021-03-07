const user = {
  name: 'Bob Dobson',
  age: 50
}

// alternate user:
// const user = {
//   name: 'Sally'
// }

console.log(user.hasOwnProperty('age'))

function resolved(user, message) {
  console.log(`${user.name} is ${user.age} years old.`);
  console.log(message);
}

function rejected(message) {
  console.log(message);
}

const checkAge = new Promise((resolve, reject) => {
    if (user.hasOwnProperty('age')) {
      resolved(user, 'Success!');
    } else {
      rejected('User age data missing :(');
    }
  })

checkAge
  .then(resolved)
  .catch(() => rejected);


  
// -----------------------------------------------------------------
//                     Scrimba Solution
console.log('-----------------------------------');
console.log('Scrimba Solution:');

const userData = new Promise((resolve, reject) => {
  // I didn't use a default bool
  const error = false;

  if(error) {
    reject('500 Level Error');
  } else {
    resolve({
      firstName: 'Dylan',
      age: 44,
      email: 'shmotmail@shmail.com'
    });
  }
});
console.log('blammo');
userData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
