'use strict';

//DESIGN DROP-DOWN
//Constants
const shareBtn = document.querySelector('.js-share-container');
const shareMsg = document.querySelector('.js-share-article');

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

const liColours1a = document.querySelector('.js-color-1a');
const liColours1b = document.querySelector('.js-color-1b');
const liColours1c = document.querySelector('.js-color-1c');
const liColours2a = document.querySelector('.js-color-2a');
const liColours2b = document.querySelector('.js-color-2b');
const liColours2c = document.querySelector('.js-color-2c');
const liColours3a = document.querySelector('.js-color-3a');
const liColours3b = document.querySelector('.js-color-3b');
const liColours3c = document.querySelector('.js-color-3c');

// Funcion de recogida de datos

function getInputDatas1() {
  const inputCircleOne = {};
  // Recogemos el color del primer cuadrado
  inputCircleOne.color1 = liColours1a.innerHTML;
  inputCircleOne.color2 = liColours1b.innerHTML;
  inputCircleOne.color3 = liColours1c.innerHTML;
  return inputCircleOne;
}

function getInputDatas2() {
  const inputCircleTwo = {};
  // Recogemos el color del segundo cuadrado
  inputCircleTwo.color1 = liColours2a.innerHTML;
  inputCircleTwo.color2 = liColours2b.innerHTML;
  inputCircleTwo.color3 = liColours2c.innerHTML;
  return inputCircleTwo;
}
function getInputDatas3() {
  const inputCircleThree = {};
  // Recogemos el color del tercer cuadrado
  inputCircleThree.color1 = liColours3a.innerHTML;
  inputCircleThree.color2 = liColours3b.innerHTML;
  inputCircleThree.color3 = liColours3c.innerHTML;
  return inputCircleThree;
}

// Crear funcion para pintar el HTML de la tarjeta
// function paintHtmlCircle1(client) {}

// Funcion de pintar datos en HTML
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

const formFieldsets = document.querySelectorAll('.js-form-fieldset');

function collapseFieldsetsExceptCurrent(event) {
  formFieldsets.forEach((fieldset) => {
    if (fieldset !== event.currentTarget) {
      fieldset.classList.add('collapsed');
    }
  });
}

for (const fieldset of formFieldsets) {
  fieldset.addEventListener('click', (event) => {
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
