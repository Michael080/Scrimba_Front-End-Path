const form = document.querySelector('#text-input');
const textField = document.querySelector('#box');
const submitButton = document.querySelector('#submit');
const entrySection = document.querySelector('.entry');
const nav = document.querySelector('.entries-nav');

let counter = 0;

function userSubmit(event){
    event.preventDefault();  //Prevent refresh
    let userInput = textField.value;  //Save user input
    // textField.value = '';  //Remove user input from textarea
    //Create output text and append to DOM
    let outputText = document.createElement('div');
    outputText.className = 'output-text';
    outputText.textContent = userInput;
    outputText.style.display = 'none';
    entrySection.appendChild(outputText);
    //Create buttons for each entry
    let toggleText = document.createElement('button');
    counter++;
    toggleText.innerText = counter;
    toggleText.className = 'toggle';
    nav.appendChild(toggleText);
    //Toggle entries via button
    // toggleText.addEventListener('click', function() {
    //
    // });
    toggleText.addEventListener('click', displayEntry);

    function displayEntry() {
        const allEntries = document.querySelectorAll('.output-text');
        allEntries.forEach(element => element.style.display ='none');
        outputText.style.display = 'block';
    }
}

form.addEventListener('submit', userSubmit);