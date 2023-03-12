import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputMailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formData = {};

formEl.addEventListener('input', onFormInput);

function onFormInput(e) {
  formData[e.target.name] = e.terget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
