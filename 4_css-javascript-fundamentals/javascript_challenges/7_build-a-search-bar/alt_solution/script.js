//DOM Selectors
const previous = document.querySelector('#carousel-button-previous');
const next = document.querySelector('#carousel-button-next');
const imageCollection = document.querySelectorAll('img');

let counter = 0;  //for iteration
//Reference values
let start = 0;
let end = imageCollection.length - 1;

//Click listeners on carousel buttons
previous.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);

function changeSlide(event){
    let buttonClicked = event.target.classList[0];
    let currentImage = imageCollection[counter];
    //Hide image
    toggleImage(currentImage);

    if (buttonClicked == 'previous'){
        previousImage();
    } else {
        nextImage();
    }
}

function previousImage(){
    if (counter == start){  //check if at start of collection
        counter = 2;
    } else {
        counter--;
    }
    let previousImage = imageCollection[counter];
    toggleImage(previousImage);
}

function nextImage(){
    if (counter == end){
        counter = 0;
    } else {
        counter++;
    }
    let nextImage = imageCollection[counter];
    toggleImage(nextImage);
}

function toggleImage(image){
    image.parentNode.classList.toggle('carousel-item-visible');
}


