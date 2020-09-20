const carousel = document.querySelector('.carousel');
let images = [];

//Add images to array via <img>s
let jokerImage = document.createElement('img');
jokerImage.setAttribute('src', 'images/1.jpg');
images.push(jokerImage);

let babyFace = document.createElement('img');
babyFace.setAttribute('src', 'images/2.jpg');
images.push(babyFace);

let blockedEyes = document.createElement('img');
blockedEyes.setAttribute('src', 'images/3.jpg');
images.push(blockedEyes);



function displayImage(image) {
    carousel.appendChild(image);
}

