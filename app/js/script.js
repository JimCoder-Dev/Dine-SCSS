let imageElement = document.getElementById('change-image');
let titleElement = document.getElementById('change-title');
let descriptionElement = document.getElementById('change-description');

const familyBtn = document.getElementById('family-btn');
const specialBtn = document.getElementById('special-btn');
const socialBtn = document.getElementById('social-btn');

const allButtons = document.querySelectorAll('.event-btn');

// let currentTitle;
// let currentImage;
// let currentDescription;

familyBtn.addEventListener('click', function () {
  removeActive();
  familyBtn.classList.add('active');
  changeContent(familyTitle, familyDescription, familyImage);
  imageElement.className = 'family-image';
});

specialBtn.addEventListener('click', function () {
  removeActive();
  specialBtn.classList.add('active');
  changeContent(specialTitle, specialDescription, specialImage);
  imageElement.className = 'special-image';
});

socialBtn.addEventListener('click', function () {
  removeActive();
  socialBtn.classList.add('active');
  changeContent(socialTitle, socialDescription, socialImage);
  imageElement.className = 'social-image';
});

const familyTitle = 'Family Gathering';
const familyDescription =
  "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.";
const familyImage = '/app/images/homepage/family-gathering-desktop@2x.jpg';

const specialTitle = 'Special Events';
const specialDescription =
  "Wheter it's a romantic dinner or special date your're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.";
const specialImage = '/app/images/homepage/special-events-desktop@2x.jpg';

const socialTitle = 'Social Events';
const socialDescription =
  "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.";
const socialImage = '/app/images/homepage/social-events-desktop@2x.jpg';

function changeContent(title, description, image) {
  titleElement.innerHTML = title;
  descriptionElement.innerHTML = description;
  imageElement.src = image;
}

function removeActive() {
  allButtons.forEach((element) => {
    element.classList.remove('active');
  });
}

// BOOKING FORM
