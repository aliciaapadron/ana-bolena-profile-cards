'use strict';

//DESIGN DROP-DOWN
//Constants
const designBox = document.querySelector('.js-designBox');
const colourDropDown = document.querySelector('.js-colour');
const designArrow = document.querySelector('.js-designArrow');

const rectangleProfile = document.querySelector('.js-rectangle');
const titleProfile = document.querySelector('.js-container-tex__title');
const titleCircle = document.querySelector('.js-preview-list');
const icons = document.querySelector('.js-icons');

const inputCircle1 = document.querySelector('.js-inputColor1');
const inputCircle2 = document.querySelector('.js-inputColor2');
const inputCircle3 = document.querySelector('.js-inputColor3');

inputCircle1.addEventListener('click', () => {
  console.log('FUCK YES1');
});
inputCircle2.addEventListener('click', () => {
  console.log('FUCK YES2');
  rectangleProfile.classList.remove('colour-1a');
  rectangleProfile.classList.add('colour-2a');
});
inputCircle3.addEventListener('click', () => {
  console.log('FUCK YES3');
});

//FILL IN DROP-DOWN

console.log('>> Ready :)');

const formTitle = document.querySelector('.js-form-title');
const formSection = document.querySelector('.js-form-container');

formTitle.addEventListener('click', () => {
  formSection.classList.toggle('collapsed');
});

// const arrow = document.querySelector('.js-arrow');
// arrow.addEventListener('click', () => {
//   arrow.classList.toggle('rotate');
// });

// const formTitle2 = document.querySelectorAll('.js-form-title');
// let formSection2 = document.querySelectorAll('.js-form-container');

// for (const container of formTitle2) {
//   container.addEventListener('click', () => {
//     const sectionContainer = formSection2;
//     sectionContainer.classList.toggle('collapsed');
//   });
// }

const arrow2 = document.querySelectorAll('.js-arrow');
for (const arrows of arrow2) {
  arrows.addEventListener('click', () => {
    arrows.classList.toggle('rotate');
  });
}
