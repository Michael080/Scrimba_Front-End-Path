const carousel = document.querySelector('.carousel');
const previous = document.querySelector('.button-previous');
const next = document.querySelector('.button-next');

let images = [];
let currentImage = 0;

//Add images to array via <img>s
let jokerImage = document.createElement('img');
jokerImage.setAttribute('src', 'images/1.jpg');
jokerImage.setAttribute('class', 'image');
images.push(jokerImage);

let babyFace = document.createElement('img');
babyFace.setAttribute('src', 'images/2.jpg');
babyFace.setAttribute('class', 'image');
images.push(babyFace);

let blockedEyes = document.createElement('img');
blockedEyes.setAttribute('src', 'images/3.jpg');
blockedEyes.setAttribute('class', 'image');
images.push(blockedEyes);

displayImage(images[currentImage]);

function displayImage(image) {
    carousel.appendChild(image);
}

previous.addEventListener('click', previousImage);

next.addEventListener('click', nextImage);

function previousImage() {
    carousel.removeChild(images[currentImage]);

    if(currentImage > 0){
        currentImage--;
    } else {
        currentImage = 2;
    }

    displayImage(images[currentImage]);
}

function nextImage() {
    carousel.removeChild(images[currentImage]);

    if(currentImage < images.length - 1){
        currentImage++;
    } else {
        currentImage = 0;
    }

    displayImage(images[currentImage]);
}