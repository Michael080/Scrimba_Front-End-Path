//DOM Selectors
const previous = document.querySelector('#carousel-button-previous');
const next = document.querySelector('#carousel-button-next');
const imageCollection = document.querySelectorAll('img');
const description = document.querySelector('.description');
const title = document.querySelector('.title');
const published = document.querySelector('.published');
const director = document.querySelector('.director');
const subDir = document.querySelector('.sub-director');
const starring = document.querySelector('.starring');
const subStar = document.querySelector('.sub-starring');
const imageInfo = document.querySelector('#image-info');
let infoAnimation = document.querySelector('.info-animation');
const progressBars = document.querySelectorAll('.bar');

//Reference values
let counter = 0;  //for iteration
let start = 0;
let end = imageCollection.length - 1;

//Images & image data
let imageData = Array();

//Joker
let joker = {
    title: 'Joker',
    year: 2019,
    director: 'Todd Phillips',
    starring: 'Joaquin Phoenix',
    imdb: 'https://www.imdb.com/title/tt7286456/'
};

imageData.push(joker);

//Baby Driver
let babyDriver = {
    title: 'Baby Driver',
    year: 2017,
    director: 'Edgar Wright',
    starring: 'Ansel Elgort',
    imdb: 'https://www.imdb.com/title/tt3890160/'
};

imageData.push(babyDriver);

//Unknown
let unknown = {
    title: 'unknown',
    year: 'n/a',
    director: 'Who Knows',
    starring: 'Creepy Family',
    imdb: 'n/a'
};

imageData.push(unknown); //Save image data in array
populateFilmData(imageData[0]); //Show data for first slide

//Click listeners on carousel buttons
previous.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);

//Transition 'slides' automatically via timer
let autoSlideTransition = setInterval(slideshow, 5000);
function slideshow() {
    let currentImage = imageCollection[counter];
    toggleImage(currentImage);
    nextImage();
    updateProgressBar();
}

function changeSlide(event){
    let buttonClicked = event.target.classList[0]; //ID which button was clicked
    let currentImage = imageCollection[counter];
    //Hide image
    toggleImage(currentImage);
    //Update carousel w/ corresponding image
    if (buttonClicked == 'previous'){
        previousImage();
        updateProgressBar();
    } else {
        nextImage();
        updateProgressBar();
    }
}

function previousImage(){
    if (counter == start){  //check if at start of carousel
        counter = end;  //display last image in carousel
    } else {
        counter--;
    }
    let previousImage = imageCollection[counter];
    toggleImage(previousImage);
    populateFilmData(imageData[counter]);
    updateProgressBar();
}

function nextImage(){
    if (counter == end){  //check if at end of carousel
        counter = start;  //display first image in carousel
    } else {
        counter++;
    }
    let nextImage = imageCollection[counter];
    toggleImage(nextImage);
    populateFilmData(imageData[counter]);
}

function toggleImage(image){
    image.parentNode.classList.toggle('carousel-item-visible');
}

//  Populate Film Data
function populateFilmData(data){
    title.textContent = data.title; //title info
    published.textContent = data.year; //filmed date

    //Director info
    let directorHeading = document.createElement('span');
    directorHeading.classList.add('sub-title');
    let subHeadDir = document.createTextNode('Director: ');
    director.textContent = data.director;
    directorHeading.appendChild(subHeadDir);
    director.prepend(directorHeading);

    //Starring info
    let starringHeading = document.createElement('span');
    starringHeading.classList.add('sub-title');
    let subHeadStar = document.createTextNode('Starring: ');
    starring.textContent = data.starring;
    starringHeading.appendChild(subHeadStar);
    starring.prepend(starringHeading);
}

function animateImageData(){
    infoAnimation.classList.toggle('info-animation');
}

// Update progress bar on slide change
function updateProgressBar(action, bar){
    clearProgressBar();
    for (let bar of progressBars){
        if (bar === progressBars[counter]){
            bar.classList.toggle('active');
        }
    }
}

function clearProgressBar(){
    for (let bar of progressBars){
        if (bar.classList.contains('active')){
            bar.classList.toggle('active');
        }
    }
}

