let input = document.querySelector('input');

// Create and style headline
let inputHeadline = document.createElement('h1');
inputHeadline.classList.add('.headline');
inputHeadline.textContent = 'Enter text here:';
document.body.prepend(inputHeadline);

// Update headline w/ text input
input.addEventListener('input', updateValue);

function updateValue(e){
    inputHeadline.textContent = e.target.value;
}
