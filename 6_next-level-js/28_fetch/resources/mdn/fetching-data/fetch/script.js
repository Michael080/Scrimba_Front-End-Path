const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
   const verse = verseChoose.value;
  updateDisplay(verse);
};

function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';

  // let request = new XMLHttpRequest();
  // request.open('GET', url);
  // request.responseType = 'text';

  // request.onload = function() {
  //   poemDisplay.textContent = request.response;
  // };

  // request.send();


  // this takes 10 fucking seconds to load via:
  //    python simple server - 'python -m SimpleHTTPServer'
  // * fetch --- modern equivalent to -  request.open() 
  // * .then() --- to run some follow-up code after the promise 
  //    resolves

  fetch(url).then(function(response) {
    // * response.text() --- converts body of response 
    // to read-only text returns received from a server 
    // following a request being sent. It also returns a promise
    //  which, once 'resolved', produces the text. 
    // equivalent to - request.responseType = 'text'
    response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
}