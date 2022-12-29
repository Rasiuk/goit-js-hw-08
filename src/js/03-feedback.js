var throttle = require('lodash.throttle');
const REFS = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const KEY_FEEDBACK = 'feedback-form-state';
REFS.form.addEventListener('submit', onFormSubmit);
REFS.form.addEventListener('input', throttle(onTextareaInput, 500));
let dataForm = {};
populateMessage();
function onTextareaInput(evt) {
  dataForm = {
    email: REFS.form.email.value,
    message: REFS.form.message.value,
  };
  const dataJSON = JSON.stringify(dataForm);
  localStorage.setItem(KEY_FEEDBACK, dataJSON);
}
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_FEEDBACK);
  console.log(dataForm);
}

function populateMessage(evt) {
  dataForm = JSON.parse(localStorage.getItem(KEY_FEEDBACK));
  if (dataForm) {
    REFS.form.email.value = dataForm.email;
    REFS.form.message.value = dataForm.message;
  }
}
