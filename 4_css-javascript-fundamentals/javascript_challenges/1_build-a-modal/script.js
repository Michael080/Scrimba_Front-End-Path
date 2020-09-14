const contactButton = document.querySelector('#contact-btn');
const modal = document.querySelector('.card');
const contactHeading = document.querySelector('.contact');

contactButton.addEventListener('click', function(){
modal.classList.remove('hidden');
document.body.style.backgroundColor = '#a9a9a9';
contactButton.classList.toggle('opaque');
contactHeading.classList.toggle('opaque');
});