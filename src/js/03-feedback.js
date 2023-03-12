import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formData = {};

checkLocalStorageOnLoad();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const strFormData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', strFormData);
}

function checkLocalStorageOnLoad() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parseFormValue = JSON.parse(savedMessage);

  if (savedMessage) {
    inputEmailEl.value =
      parseFormValue.email !== undefined ? parseFormValue.email : '';

    textareaEl.value =
      parseFormValue.message !== undefined ? parseFormValue.message : '';
  }
}
