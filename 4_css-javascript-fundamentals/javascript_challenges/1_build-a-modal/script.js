const contactButton = document.querySelector('#contact-btn');
const modal = document.querySelector('.card');
const contactHeading = document.querySelector('.contact');
const closeButton = document.querySelector('#close-btn');

contactButton.addEventListener('click', toggleDimBackground);

closeButton.addEventListener('click', toggleDimBackground);

function toggleDimBackground(){
    modal.classList.toggle('hidden');
    document.body.classList.toggle('gray-background');
    contactButton.classList.toggle('opaque');
    contactHeading.classList.toggle('opaque');
}