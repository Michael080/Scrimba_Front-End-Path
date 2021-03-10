/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

//  fetch('https://jsonplaceholder.typicode.com/comments/1')
//   .then(response => response.json()) // has a 'map' of the json
//   .then(data => console.log(data)) // get the data

// const par = document.querySelector('p');
// console.log(par);
// function post(data) {
//   par.textContent = data;
// }

// post('blammo');

const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/comments/1', {
  method: "POST", // default: "GET"
  body: JSON.stringify({
    postId: 1,
    name: 'Dylan',
    email: 'dylansemal310@gmail.com',
    body: 'That was dope!'
  })
})
  .then(response => response.json()) // has a 'map' of the json
  .then(data => console.log('data:', data)) // get the data
  // .then(data => console.log('data:', data.body)) // get the data
  // .then(data => par.textContent = data) // get the data
  // .then(data => blammo = data)

