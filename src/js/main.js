'use strict';

console.log(">> Ready :)");

const fillTitle = document.querySelector('.js-fill-title');
const fillSection = document.querySelector('.js-fill-container');

fillTitle.addEventListener('click', () => {
  console.log('funciona?');
  fillSection.classList.toggle('collapsed');
});

const arrow = document.querySelector('.js-arrow')

arrow.addEventListener('click', () => {
  console.log('funciona:D');
  arrow.classList.toggle('rotate');
});

