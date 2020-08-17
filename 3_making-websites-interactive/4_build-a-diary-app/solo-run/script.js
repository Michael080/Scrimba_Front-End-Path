const form = document.querySelector('#text-input');
const textField = document.querySelector('#box');
const button = document.querySelector('#submit');
const entrySection = document.querySelector('.entry');
const nav = document.querySelector('.entries-nav');

let counter = 0;

function userSubmit(event){
    event.preventDefault();  //Prevent refresh
    let userInput = textField.value;  //Save user input
    //Create output text and append to DOM
    let outputText = document.createElement('div');
    outputText.textContent = userInput;
    outputText.style.display = 'none';
    //Create buttons for each entry
    let toggleText = document.createElement('button');
    counter++;
    toggleText.innerText = counter;
    nav.appendChild(toggleText);
}

form.addEventListener('submit', userSubmit);