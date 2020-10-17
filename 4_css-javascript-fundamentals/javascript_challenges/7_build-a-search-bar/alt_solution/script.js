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

//Store state information
class Carousel {
    constructor(current, previous, next, image, description, transition) {
        this.current = current;
        this.previous = previous;
        this.next = next;
        this.image = image;
        this.description = description;
        //TODO --- Add actions parameter when appropriate
        // this.actions = {
        //     transitionPrevious, transitionNext
        // };
        this.transition = transition;
    }

    getCurrent(){
        return this.current;
    }

    setCurrent(slide){
        this.current = slide;
    }

    setPrev() {
        this.previous = this.current.previousSlide;
    }

    setNext() {
        this.next = this.current.nextSlide;
    }

    // Update previous/next properties
    updateActions(){
        this.setPrev();
        this.setNext();
    }
}

class Film {
    constructor(
        title, year, director, starring, imdbLink, image, previousSlide, nextSlide,
                currentSlide, filmInfoDOM, value, state, filmID, slideDOM,
        slidesBiyatch, switchDisplay
    ) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.starring = starring;
        this.imdbLink = imdbLink;
        this.image = image;
        this.previousSlide = previousSlide;
        this.nextSlide = nextSlide;
        this.currentSlide = currentSlide;
        this.filmInfoDOM = filmInfoDOM;
        this.value = false;
        this.state = '!currentSlide'; //state can be either '!currentSlide' || 'currentSlide'
        this.filmID = filmID; //create w/ saveFilmArray()
        this.slideDOM = new Object; //create w/ saveFilmArray()

        /*
        Description:
        --Take input from getSlides() and display slides or call getSlides() on
        --the slides that are 'in queue' to be

        Parameters:
        --switch - ALWAYS passed to toggle film display
        --slide - Specs 'next', 'previous', OR 'current'
        */
        this.slidesBiyatch = function(transitionType, object) {
            const getSlides = {
                //TODO: Update currentSlide - on 'this' object and in the 'state' object
                switch: switchDisplay,
                next: (function () {
                    //TODO -- why does this not work?
                    // imageData[this.filmID - 1].isCurrent;
                    console.log('hello from next');
                })(),
                previous: 'previous',
                //TODO -- call makeCurrent instead of current
                makeCurrent: (function () {
                    console.log('do whatever the fuk you fuk');
                    // carouselState.currentSlide =
                })(),
                default: 'default'
            }

            return (getSlides[switcheroo] || getSlides.default);
        }

        //toggle display of image and text
        this.switchDisplay = function(){
            toggleImage(imageCollection[this.filmID]);
            // toggleDescription();
        }
    }
    //TODO --- Redundant?
    saveToArray(item, array){
        array.push(item);
    }

    findAdjacent(slidesArray = slideStore){
        const firstIndex = 0;
        const lastIndex = slidesArray.length - 1;
        const firstSlide = slidesArray[firstIndex];
        const lastSlide = slidesArray[lastIndex];

        if (this.filmID === firstIndex) {
            this.previousSlide = lastSlide;
            this.nextSlide = slidesArray[ this.filmID + 1 ];

        } else if (this.filmID === lastIndex) {
            this.previousSlide = slidesArray[ this.filmID -1 ];
            this.nextSlide = firstSlide;
        }else {
            this.previousSlide = slidesArray[ this.filmID - 1];
            this.nextSlide = slidesArray[ this.filmID + 1 ];
        }
    }

    set setImage(setImage) {
        this.image = setImage;
    }

    //TODO -- Rename- isCurrent() =>   ||  implement as method instead of getter
    //Check and change state of film
    get isCurrent() {
        if(this.state === 'currentSlide') {
            //TODO -- Store current object in var outside of object? - call var currentSlideID
            this.state = '!currentSlide'; //toggle state
            // setCurrentState(switch); //display corresponding film
            this.switchDisplay();
            console.log(this.slidesBiyatch('switchDisplay'));
        // state === '!currentSlide'
        } else {
            this.state = 'currentSlide'; //toggle state
            // this.slidesBiyatch('switchDisplay', 'makeCurrent', this.filmID, slideDOM);
        }
        // setCurrentState(this.value);
    }

    set setCurrentState(string) {

        if(string === next) {
            //display next
        //

        } else {
            //display previous
            this.state = false;
        }
        //Run if this.currentSlide(which has no value yet) is true
        switch (string) {
            case 'next':
                // nextSlide has not been initialized yet...do that
                // currentSlide = nextSlide;
                // isCurrent(nextFilm);
                break;
        }

    //  Display Film

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


function slideshow() {
    //TODO --- Use carouselState object to access these values
    let currentImage = imageCollection[counter];
    let currentDescription = descriptions[counter];
    //Hide image & description
    toggleImage(currentImage);
    toggle(currentDescription, 'description-visible');

    nextImage();
    updateProgressBar();
}

function changeSlide(event) {
    let buttonClicked = event.target.classList[0]; //ID which button was clicked
    let currentImage = imageCollection[counter];
    let currentDescription = descriptions[counter];

    //Hide image & description
    toggleImage(currentImage);
    toggle(currentDescription, 'description-visible');

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
    // if (counter == start) {  //check if at start of carousel
    //     counter = end;  //display last image in carousel
    // } else {
    //     counter--;
    // }

    //Display image & info
    let previousImage = imageCollection[counter];
    // let previousDescription = descriptions[counter];
    toggleImage(previousImage);
    toggle(previousDescription, 'description-visible');
    updateProgressBar();

    //
    // toggleImage(carouselState.currentSlide.image); // hide image
    // // hide description
    // toggle(carouselState.currentSlide.filmInfoDOM, 'description-visible');
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
    toggle(nextDescription, 'description-visible');
}

function toggleImage(image) {
    image.parentNode.classList.toggle('carousel-item-visible');
}

let makeDescription = (film) => {
    let descriptionDiv = makeElement('div', 'description', 'info-animation');
    descriptionDiv.id = 'image-info';

    descriptionDiv.innerHTML =
        `<h3 class="title">${film.title}<span class="published"></span></h3>
        <ul class="details">
            <li class="director"><span class="sub-title">Director: </span>${film.director}</li>
            <li class="starring"><span class="sub-title">Starring: </span>${film.starring}</li>
            <li class="imdb"><a class="imdb-link" href="${film.imdbLink}"><img src="logos/imdb_logo.png" alt="IMDB logo and link to film page" class="imdb-logo"></a></li>
        </ul>`;
    return descriptionDiv;
}
// TODO --- Refactor- Break up into separate functions AND use as many existing methods and functions
// as possible to clean up
//in use
// Create description and add to DOM
function createFilmDescription(film, slidesArray = slideStore) {
   let descriptionDiv = makeDescription(film);
    //make info for first slide visible
    let firstSlide = slidesArray[0];
    if (film === firstSlide) {
        toggle(descriptionDiv, 'description-visible');
    }
    return descriptionDiv;
}

function makeElement(type, ...htmlClasses) {
    let elem = document.createElement(type);
    htmlClasses.forEach(clss => elem.classList.add( clss ));
    return elem;
}

//TODO --- Methodize
let updateDOM = element => carousel.appendChild(element);

//TODO --- Delete- Use as method & implement @ creation of description
//in use
let addDescriptionsToDOM = (array = slideStore) => {
    array.forEach(slide => updateDOM(slide.filmInfoDOM));
}

//in use
let toggle = (element, name) => element.classList.toggle(name);
//in use
let animateImageData = () => infoAnimation.classList.toggle('info-animation');

let convertCollection = collection => Array.from(collection);

//in use
// Update progress bar on slide change
function updateProgressBar(action, bar) {
    clearProgressBar();
    let bars = convertCollection(progressBars); // convert from HTML collection to array
    // Set class => 'active'
    toggle(bars.filter(bar => bar === bars[counter])[0], 'active');
}
//in use
let clearProgressBar = () => {
    let bars = convertCollection(progressBars); // convert from HTML collection to array
    // Remove 'active' class
    toggle(bars.filter(bar => bar.classList.contains('active'))[0], 'active');
}

//TODO --- Methodize
//Add object/s to array
function addToArray(array, ...objects){
    objects.forEach(obj => array.push(obj));
}

unknown.setImage = imageCollection[unknown.filmID];

let slideStore = new Array;  // for containing each slide object
addToArray(slideStore, joker, babyDriver, unknown);

//update IDs, and set image,previousSlide/nextSlide on each object
for (let slide of slideStore) {
    slide.filmInfoDOM = createFilmDescription(slide, slideStore); // create innerHTML (title, director, etc,.)
    slide.filmID = slideStore.indexOf(slide); // set filmID property
    slide.setImage = imageCollection[slide.filmID]; // set image property
    slide.findAdjacent(); // set previousSlide & nextSlide properties
}

let carouselState = new Carousel(joker);
carouselState.updateActions(); // update next/previous properties

//TODO --- Methodize
addDescriptionsToDOM(slideStore);  // Update DOM w/ descriptions
let descriptions = document.querySelectorAll('.description');

//Click listeners on carousel buttons
previous.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);

//TODO -- Turn autoSlideTransition() back on
//Transition 'slides' automatically via timer
// let autoSlideTransition = setInterval(slideshow, 5000);