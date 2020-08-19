const form = document.querySelector('#text-input');
const textField = document.querySelector('#box');
const entrySection = document.querySelector('.entry');
const nav = document.querySelector('.entries-nav');

let counter = 0;

function userSubmit(event){
    event.preventDefault();  //Prevent refresh
    let userInput = textField.value;  //Save user input
    //Create output text and append to DOM
    let outputText = document.createElement('div');
    outputText.className = 'output-text';
    outputText.textContent = userInput;
    outputText.style.display = 'none';
    entrySection.appendChild(outputText);
    //Create buttons for each entry
    if (textField.value.length > 0) {
        let toggleText = document.createElement('button');
        counter++;
        toggleText.innerText = counter;
        toggleText.className = 'toggle';
        nav.appendChild(toggleText);
        toggleText.addEventListener('click', displayEntry);
        textField.value = '';  //Remove user input from textarea
    }

    function displayEntry() {
        const allEntries = document.querySelectorAll('.output-text');
        allEntries.forEach(element => element.style.display ='none');
        outputText.style.display = 'block';
    }
}

form.addEventListener('submit', userSubmit);