'use strict';

console.log(">> Ready :)");

const fillTitle = document.querySelector(".js-fill-title");
const fillSection = document.querySelector('.js-fill-container');

fillTitle.addEventListener('click', () => {
  console.log('funciona?');
  fillSection.classList.toggle('collapsed');
});
