/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

 const fetch = require('node-fetch');

 fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  body: JSON.stringify({
    title: 'comment',
    body: 'I feel commenty...',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



 

