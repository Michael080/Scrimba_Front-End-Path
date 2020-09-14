const contactButton = document.querySelector('#contact-btn');
const modal = document.querySelector('.card');

contactButton.addEventListener('click', function(){
modal.classList.remove('hidden');
});