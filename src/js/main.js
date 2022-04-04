'use strict';

//DESIGN DROP-DOWN
//Constants

function getElement(className) {
  return document.querySelector(className);
}

const shareBtn = getElement('.js-share-container');
const shareMsg = getElement('.js-share-article');
const designBox = getElement('.js-designBox');
const colourDropDown = getElement('.js-colour');
const designArrow = getElement('.js-designArrow');
const inputCircle1 = getElement('.js-inputColor1');
const inputCircle2 = getElement('.js-inputColor2');
const inputCircle3 = getElement('.js-inputColor3');
const cardProfile = getElement('.js-palette');
// Constante formulario
const nameForm = getElement('.js__fillIn__name');
// const nameForm = querySelector('.js__fillIn__name');
const form = getElement('.js_form');
const jobForm = getElement('.js__fillIn__job');
const nameProfile = getElement('.js__card__name');
const jobProfile = getElement('.js__card__job');
const emailProfile = getElement('.js_email');
const phoneProfile = getElement('.js_phone');
const linkedinProfile = getElement('.js_linkedin');
const githubProfile = getElement('.js_github');
const formFieldsets = document.querySelectorAll('.js-form-fieldset');
let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: '01',
  photo: '',
};
function modifyCardClasses(classAdd, classremove1, classremove2) {
  cardProfile.classList.add(classAdd);
  cardProfile.classList.remove(classremove1);
  cardProfile.classList.remove(classremove2);
}

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

inputCircle1.addEventListener('click', () => {
  modifyCardClasses('palette3', 'palette2', 'palette1');
});
inputCircle2.addEventListener('click', () => {
  modifyCardClasses('palette2', 'palette3', 'palette1');
});
inputCircle3.addEventListener('click', () => {
  modifyCardClasses('palette1', 'palette3', 'palette2');
});

function handleKeyup(event) {
  const inputElement = event.target;
  if (inputElement.name === 'name') {
    data.name = inputElement.value;
    nameProfile.innerHTML = data.name;
    if (inputElement.value === '') {
      nameProfile.innerHTML = 'Escribe tu nombre';
    }
  } else if (inputElement.name === 'job') {
    jobProfile.innerHTML = data.job;
    data.job = inputElement.value;
    if (inputElement.value === '') {
      jobProfile.innerHTML = 'Escribe tu profesion';
    }
  } else if (inputElement.name === 'email') {
    data.email = inputElement.value;
  } else if (inputElement.name === 'phone') {
    data.phone = inputElement.value;
  } else if (inputElement.name === 'linkedin') {
    data.linkedin = inputElement.value;
  } else if (inputElement.name === 'github') {
    data.github = inputElement.value;
  }

  renderPreview();
  console.log(data);
}
form.addEventListener('keyup', handleKeyup);

function renderPreview() {
  emailProfile.href = `mailto:${data.email}`;
  linkedinProfile.href = `${data.linkedin}`;
  githubProfile.href = `${data.github}`;
}

form.addEventListener('keyup', handleKeyup);

shareBtn.addEventListener('click', (event) => {
  event.preventDefault();
  shareBtn.classList.add('white');
  shareMsg.classList.remove('hidden');
});
