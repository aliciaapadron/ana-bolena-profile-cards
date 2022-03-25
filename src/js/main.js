'use strict';

//DESIGN DROP-DOWN
//Constants
const designBox = document.querySelector('.js-designBox');
const colourDropDown = document.querySelector('.js-colour');
const designArrow = document.querySelector('.js-designArrow');

const rectangle = document.querySelector('.js-rectangle');
const rectangle = document.querySelector('.js-rectangle');

//Functions
designBox.addEventListener('click', () => {
  console.log('mierda');
  colourDropDown.classList.toggle('collapsed');
  console.log('vale');
  designArrow.classList.toggle('rotate');
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
