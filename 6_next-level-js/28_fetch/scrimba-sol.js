const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Comment 105',
      email: 'bobDobson@SpeechGrammarList.com',
      body: 'This is my body',
      postId: 1
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));