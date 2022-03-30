'use strict';

//DESIGN DROP-DOWN
//Constants
const shareBtn = document.querySelector('.js-share-container');
const shareMsg = document.querySelector('.js-share-article');

const designBox = document.querySelector('.js-designBox');
const colourDropDown = document.querySelector('.js-colour');
const designArrow = document.querySelector('.js-designArrow');

const rectangleProfile = document.querySelector('.js-rectangle');
const titleCircle = document.querySelector('.js-preview-list');
const icons = document.querySelectorAll('.js-icons');

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

// Constante formulario

const nameForm = document.querySelector('.js__fillIn__name');
const jobForm = document.querySelector('.js__fillIn__job');
const nameProfile = document.querySelector('.js__card__name');
const jobProfile = document.querySelector('.js__card__job');

// Funcion de recogida de datos

function getInputDatas1() {
  let inputCircleOne = {};
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

function colorCard(classContains, classListRemove, cardString) {
  if (
    cardString.classList.contains(classContains) ||
    cardString.classList.contains(classListRemove)
  ) {
    cardString.classList.remove(classListRemove);
    cardString.classList.remove(classContains);
  }
}

inputCircle1.addEventListener('click', () => {
  colorCard('colour-2b', 'colour-3b', rectangleProfile);
  colorCard('colorText-1b', 'colorText-1c', nameProfile);
  colorCard('.colorText-1b', '.colorText-1c', icons);
  rectangleProfile.classList.add('colour-1b');
  nameProfile.classList.add('colorText-1a');
  icons.classList.add('colorText-1a');
});
inputCircle2.addEventListener('click', () => {
  colorCard('colour-1b', 'colour-3b', rectangleProfile);
  colorCard('colorText-1a', 'colorText-1c', nameProfile);

  rectangleProfile.classList.add('colour-2b');
  nameProfile.classList.add('colorText-1b');
});

inputCircle3.addEventListener('click', () => {
  colorCard('colour-2b', 'colour-1b', rectangleProfile);
  colorCard('colorText-1a', 'colorText-1b', nameProfile);

  rectangleProfile.classList.add('colour-3b');
  nameProfile.classList.add('colorText-1c');
});

//FILL IN DROP-DOWN
// función con la cual recoges el valor del id y pinta ese valor en el HTML
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

const formFieldsets = document.querySelectorAll('.js-form-fieldset');

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
