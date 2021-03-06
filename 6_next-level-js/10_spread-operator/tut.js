let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = contacts;

contacts.push('John');

console.log(contacts); // => Mary, Joel, Danny, John
// John is printed as contacts is a 'reference' 

// this can be avoided using the spread operator
let contactsWithSpread = ["Mary", "Joel", "Danny"];

let personalFriendsWithSpread = [...contactsWithSpread];
contactsWithSpread.push('John');

console.log(personalFriendsWithSpread); // => Mary, Joel, Danny

// syntax for using spread and assigning some new values
let personalWithAdditions = [
  'Bob Dobson', ...contactsWithSpread, 'Pope'
];

console.log(personalWithAdditions); // => Bob Dobson Mary, Joel, Danny, Pope


// using spread to 'reassign' key/val pairs to a new object
let person = {
  name: 'Adam',
  age: 25,
  city: 'Manchester'
}

let employee = {
  ...person,
  salary: 50000,
  position: 'Sofware Developer'
}

console.log(employee);

person.name = 'Bob';
console.log(employee); // => name doesn't change because spread doesn't reference the person object