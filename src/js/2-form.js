const feedBackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLs = JSON.parse(localStorage.getItem('.feedback-form'));

  if (formDataFromLs === null) {
    return;
  }
  formData = formDataFromLs;

  for (const key in formDataFromLs) {
    if (formDataFromLs.hasOwnProperty(key)) {
      feedBackFormEl.elements[key].value = formDataFromLs[key];
    }
  }
};
fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('.feedback-form', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  event.target.reset();
  localStorage.removeItem('.feedback-form');
  console.log(formData);
};

localStorage.removeItem('.feedback-form'); // чиститься локал сторідж точечно по ключу
formData = { email: '', message: '' }; // чиститься обʼект formData

feedBackFormEl.addEventListener('input', onFormFieldChange);
feedBackFormEl.addEventListener('submit', onFeedbackFormSubmit);
