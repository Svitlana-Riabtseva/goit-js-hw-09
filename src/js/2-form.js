let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

const data = JSON.parse(localStorage.getItem(localStorageKey));

if (data) {
  email.value = data.email;
  message.value = data.message;
  formData = data;
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(localStorageKey);
  console.log(formData);
  form.reset();
});

const formInput = document.querySelectorAll('.feedback-form input');

for (const i of formInput) {
  i.style.border = '1px solid #808080';
  i.style.borderRadius = '4px';
  i.style.width = '360px';
  i.style.marginTop = '8px';
  i.style.paddingTop = '8px';
  i.style.paddingBottom = '8px';
  i.style.paddingLeft = '16px';
  i.style.fontWeight = '400';
  i.style.fontSize = '16px';
  i.style.lineHeight = '150%';
  i.style.letterSpacing = '0.04em';
  i.style.color = '#2e2f42';
  i.style.fontFamily = 'Montserrat, sans-serif';
  i.onmouseover = function () {
    this.style.border = '1px solid #000';
  };
  i.onmouseout = function () {
    this.style.border = '1px solid #808080';
  };
  i.onfocus = function () {
    this.style.border = '1px solid #808080';
    this.style.outline = 'none';
  };
}

const formTextArea = document.querySelectorAll('.feedback-form textarea');

for (const i of formTextArea) {
  i.style.border = '1px solid #808080';
  i.style.borderRadius = '4px';
  i.style.width = '360px';
  i.style.height = '80px';
  i.style.marginTop = '8px';
  i.style.paddingTop = '8px';
  i.style.paddingBottom = '8px';
  i.style.paddingLeft = '16px';
  i.style.fontWeight = '400';
  i.style.fontSize = '16px';
  i.style.lineHeight = '150%';
  i.style.letterSpacing = '0.04em';
  i.style.color = '#2e2f42';
  i.style.resize = 'none';
  i.style.fontFamily = 'Montserrat, sans-serif';
  i.onmouseover = function () {
    this.style.border = '1px solid #000';
  };
  i.onmouseout = function () {
    this.style.border = '1px solid #808080';
  };
  i.onfocus = function () {
    this.style.border = '1px solid #808080';
    this.style.outline = 'none';
  };
}

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '8px';
form.style.alignItems = 'center';
form.style.borderRadius = '8px';
form.style.padding = '24px';
form.style.width = '408px';
form.style.height = '256px';
form.style.backgroundColor = '#fff';
form.style.marginLeft = 'auto';
form.style.marginRight = 'auto';
form.style.fontFamily = 'Montserrat, sans-serif';

const btn = document.querySelector('.feedback-form button');
btn.style.borderRadius = '8px';
btn.style.border = 'none';
btn.style.padding = '8px 16px';
btn.style.width = '95px';
btn.style.height = '40px';
btn.style.background = '#4e75ff';
btn.style.fontWeight = '500';
btn.style.fontSize = '16px';
btn.style.lineHeight = '150%';
btn.style.letterSpacing = '0.04em';
btn.style.color = '#fff';
btn.style.fontFamily = 'Montserrat, sans-serif';
btn.style.marginRight = 'auto';
btn.style.marginTop = '8px';
btn.style.cursor = 'pointer';
btn.onmouseover = function () {
  this.style.background = '#6c8cff';
};
btn.onmouseout = function () {
  this.style.background = '#4e75ff';
};
