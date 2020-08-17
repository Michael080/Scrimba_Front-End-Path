const form = document.querySelector('#text-input');
const button = document.querySelector('#submit');

function userSubmit(event){
    event.preventDefault();
}

form.addEventListener('submit', userSubmit);