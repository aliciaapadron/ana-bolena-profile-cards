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

const arrow = document.querySelector('.js-arrow');

arrow.addEventListener('click', () => {
  arrow.classList.toggle('rotate');
});
