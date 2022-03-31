'use strict';

//DESIGN DROP-DOWN
//Constants
const shareBtn = document.querySelector('.js-share-container');
const shareMsg = document.querySelector('.js-share-article');
const designBox = document.querySelector('.js-designBox');
const colourDropDown = document.querySelector('.js-colour');
const designArrow = document.querySelector('.js-designArrow');

const formFieldsets = document.querySelectorAll('.js-form-fieldset');
const inputCircle1 = document.querySelector('.js-inputColor1');
const inputCircle2 = document.querySelector('.js-inputColor2');
const inputCircle3 = document.querySelector('.js-inputColor3');
const cardProfile = document.querySelector('.js-palette');
// Constante formulario
const nameForm = document.querySelector('.js__fillIn__name');
const jobForm = document.querySelector('.js__fillIn__job');
const nameProfile = document.querySelector('.js__card__name');

function modifyCardClasses(classAdd, classremove1, classremove2) {
  cardProfile.classList.add(classAdd);
  cardProfile.classList.remove(classremove1);
  cardProfile.classList.remove(classremove2);
}
inputCircle1.addEventListener('click', () => {
  modifyCardClasses('palette1', 'palette2', 'palette3');
});

inputCircle2.addEventListener('click', () => {
  modifyCardClasses('palette2', 'palette1', 'palette3');
});

inputCircle3.addEventListener('click', () => {
  modifyCardClasses('palette3', 'palette1', 'palette2');
});

const pressKey = (event) => {
  let element = event.currentTarget.id;
  console.log(element);
  if (element === 'name') {
    nameProfile.innerHTML = event.currentTarget.value;
  } else if (element === 'job') {
    jobProfile.innerHTML = event.currentTarget.value;
  }
};

nameForm.addEventListener('keyup', pressKey);
jobForm.addEventListener('keyup', pressKey);

console.log('>> Ready :)');

function collapseFieldsetsExceptCurrent(event) {
  formFieldsets.forEach((fieldset) => {
    if (fieldset !== event.currentTarget.parentElement) {
      fieldset.classList.add('collapsed');
    }
  });
}

for (const fieldset of formFieldsets) {
  const title = fieldset.querySelector('.js-form-title');

  title.addEventListener('click', (event) => {
    // Escondemos todos los fieldset menos el pulsado
    collapseFieldsetsExceptCurrent(event);

    // Mostramos/Escondemos el fieldset pulsado
    fieldset.classList.toggle('collapsed');
  });
}

shareBtn.addEventListener('click', (event) => {
  event.preventDefault();
  shareBtn.classList.add('white');
  shareMsg.classList.remove('hidden');
});
