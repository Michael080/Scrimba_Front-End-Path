//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";
const fetch = require('node-fetch');

async function getJoke() {
  await fetch(apiUrl)
    .then((response) => response.json())
    .then((joke) => console.log(joke.value));
} 

getJoke();

