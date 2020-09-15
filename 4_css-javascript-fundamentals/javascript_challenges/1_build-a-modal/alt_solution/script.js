const contactButton = document.querySelector('#contact-btn');
const modal = document.querySelector('.card');
const contactHeading = document.querySelector('.contact');
const closeButton = document.querySelector('#close-btn');
const overlay = document.querySelector('.container');

contactButton.addEventListener('click', toggleDimBackground);

closeButton.addEventListener('click', toggleDimBackground);

function toggleDimBackground(){
    modal.classList.toggle('hidden');
    overlay.id = 'overlay';
}