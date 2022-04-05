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
const resetButton = getElement('.js__reset');
const formFieldsets = document.querySelectorAll('.js-form-fieldset');
let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: 1,
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
  data.palette = 1;
});
inputCircle2.addEventListener('click', () => {
  modifyCardClasses('palette2', 'palette3', 'palette1');
  data.palette = 2;
});
inputCircle3.addEventListener('click', () => {
  modifyCardClasses('palette1', 'palette3', 'palette2');
  data.palette = 3;
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
}
resetButton.addEventListener('click', handleReset);
function handleReset() {
  console.log('click');
  const profileImage = document.querySelector('.js__profile-image');
  const profilePreview = document.querySelector('.js__profile-preview');
  form.reset();

  nameProfile.innerHTML = 'Nombre profile';
  jobProfile.innerHTML = 'Front-end developer';
  emailProfile.href = '';
  linkedinProfile.href = '';
  githubProfile.href = '';
  modifyCardClasses('palette3', 'palette2', 'palette1');
  // const srcImage = 'url(./assets/images/imagen-chica.png)';
  profilePreview.style.backgroundImage = '';
  profileImage.style.backgroundImage = 'url(./assets/images/imagen-chica.png)';
  data = {
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    palette: 3,
    photo: '',
  };
  return data;
}

function renderPreview() {
  emailProfile.href = `mailto:${data.email}`;
  linkedinProfile.href = `${data.linkedin}`;
  githubProfile.href = `${data.github}`;
  phoneProfile.href = `${data.phone}`;
}
form.addEventListener('keyup', handleKeyup);

shareBtn.addEventListener('click', (event) => {
  event.preventDefault();
  shareBtn.classList.add('white');
  shareMsg.classList.remove('hidden');
});

//  hacer fetch con POST y enviar el objeto (comprobar que sea igual)
// coger el resultado que nos da la api
// modificiarlo por el enlace de compartir
// https://awesome-profile-cards.herokuapp.com/card/

shareBtn.addEventListener('click', createCard);

const feedback = getElement('.js_message_error');
function createCard(event) {
  event.preventDefault();
  console.log(data);
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success === data) {
        feedback.innerHTML = 'Genial, la tarjeta ha sido creada!';
      } else {
        feedback.innerHTML = 'Falta algún dato en el formulario';
      }
    });
}

// Da error, preguntar el por que
