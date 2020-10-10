//DOM Selectors
//carousel
const carousel = document.querySelector('.carousel');
//buttons
const previous = document.querySelector('#carousel-button-previous');
const next = document.querySelector('#carousel-button-next');
//images
const imageCollection = document.querySelectorAll('.carousel-image');
const description = document.querySelector('.description');
//description
const title = document.querySelector('.title');
const published = document.querySelector('.published');
const director = document.querySelector('.director');
const starring = document.querySelector('.starring');
const imdbLinkDOM = document.querySelector('.imdb-link');
const imdbLinkImage = document.querySelector('.imdb-logo');
let infoAnimation = document.querySelector('.info-animation');
//progress bar
//TODO -- turn progress bar into a navigation
const progressBars = document.querySelectorAll('.bar');

//Reference values
let counter = 0;  //for iteration
let start = 0;
let end = imageCollection.length - 1;

//Images & image data
let imageData = Array();

//works...maybe?
/*

-- CHANGE SLIDE METHOD --
create properties:
    imageDOM - contains the node for corresponding image

create method:
    - gets info from getter
    - toggles 'visible' classes (create 1 visible class to rule them all?)

create getter -- (DOM elements):
    returns -> filmInfoDOM && imageDOM

create getter -- (next film / previous film)
    returns -> corresponding adjacent objects
 */
class Film {
    constructor(title, year, director, starring, imdbLink, currentSlide, filmInfoDOM) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.starring = starring;
        this.imdbLink = imdbLink;
        this.currentSlide = currentSlide;
        this.filmInfoDOM = filmInfoDOM;
    }

    saveFilmArray() {
        imageData.push(this);
    }

}

let joker = new Film(
    'Joker', 2019, 'Todd Phillips', 'Joaquin Phoenix',
    'https://www.imdb.com/title/tt7286456/'
);

let babyDriver = new Film(
    'Baby Driver', 2017, 'Edgar Wright', 'Ansel Elgort',
    'https://www.imbd.com/title/tt3890160/'
);


let unknown = new Film(
    'unknown', "n/a", 'Who Knows', 'Creepy Family',
    "n/a"
);

// Store films in imageData[]
joker.saveFilmArray();
babyDriver.saveFilmArray();
unknown.saveFilmArray();
//TODO --- Methodize
addDescriptionsToDOM(imageData);  // Update DOM w/ image info
let descriptions = document.querySelectorAll('.description');

//Click listeners on carousel buttons
previous.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);

//Transition 'slides' automatically via timer
let autoSlideTransition = setInterval(slideshow, 5000);

function slideshow() {
    let currentImage = imageCollection[counter];
    let currentDescription = descriptions[counter];
    //Hide image & description
    toggleImage(currentImage);
    toggleDescription(currentDescription);

    nextImage();
    updateProgressBar();
}

function changeSlide(event) {
    let buttonClicked = event.target.classList[0]; //ID which button was clicked
    let currentImage = imageCollection[counter];
    let currentDescription = descriptions[counter];

    //Hide image & description
    toggleImage(currentImage);
    toggleDescription(currentDescription);

    //Update carousel w/ corresponding image
    if (buttonClicked == 'previous') {
        previousImage();
        updateProgressBar();
    } else {
        nextImage();
        updateProgressBar();
    }
}

function previousImage() {
    if (counter == start) {  //check if at start of carousel
        counter = end;  //display last image in carousel
    } else {
        counter--;
    }

    //Display image & info
    let previousImage = imageCollection[counter];
    let previousDescription = descriptions[counter];
    toggleImage(previousImage);
    toggleDescription(previousDescription);
    updateProgressBar();
}

function nextImage(){
    if (counter == end) {  //check if at end of carousel
        counter = start;  //display first image in carousel
    } else {
        counter++;
    }

    //Display image & info
    let nextImage = imageCollection[counter];
    let nextDescription = descriptions[counter];
    toggleImage(nextImage);
    toggleDescription(nextDescription);
}

function toggleImage(image) {
    image.parentNode.classList.toggle('carousel-item-visible');
}

function createFilmDescription(film, joker) {
    let testDiv = document.createElement('div');
    testDiv.classList.add('description');
    testDiv.classList.add('info-animation');
    testDiv.id = 'image-info';

    testDiv.innerHTML = `<h3 class="title">${film.title}<span class="published"></span></h3>
        <ul class="details">
            <li class="director"><span class="sub-title">Director: </span>${film.director}</li>
            <li class="starring"><span class="sub-title">Starring: </span>${film.starring}</li>
            <li class="imdb"><a class="imdb-link" href="${film.imdbLink}"><img src="logos/imdb_logo.png" alt="IMDB logo and link to film page" class="imdb-logo"></a></li>
        </ul>`;

    //make info for first slide visible
    let firstSlide = imageData[0];
    if (film === firstSlide) {
        toggleDescription(testDiv);
        console.log(film);
    }

    return testDiv;
}

function updateData(filmsDataArray) {
    for (film of filmsDataArray){
        film.filmInfoDOM = createFilmDescription(film);  //update film object
    }
}

function updateDOM(element) {
    carousel.appendChild(element);
}

function addDescriptionsToDOM(filmsArray) {
    updateData(filmsArray); //add DOM elements to each film object

    for (film of filmsArray) {
        updateDOM(film.filmInfoDOM);
    }
}

function toggleDescription(description) {
    description.classList.toggle('description-visible');
}

function animateImageData() {
    infoAnimation.classList.toggle('info-animation');
}

// Update progress bar on slide change
function updateProgressBar(action, bar) {
    clearProgressBar();
    for (let bar of progressBars) {
        if (bar === progressBars[counter]) {
            bar.classList.toggle('active');
        }
    }
}

function clearProgressBar() {
    for (let bar of progressBars) {
        if (bar.classList.contains('active')) {
            bar.classList.toggle('active');
        }
    }
}