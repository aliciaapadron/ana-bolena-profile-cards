'use strict';

//DESIGN DROP-DOWN
//Constants
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
