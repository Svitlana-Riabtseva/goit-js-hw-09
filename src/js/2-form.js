const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

const onFormFieldChange = event => {
  const fieldValue = event.target.value;
  const fieldName = event.target.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form', JSON.stringify(formData));
};
feedbackFormEl.addEventListener('input', onFormFieldChange);

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form'));

  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;

  console.log(formDataFromLS);

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      console.log(formDataFromLS);
      console.dir(feedbackFormEl.elements[key].value);

      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const email = feedbackFormEl.elements['email'].value.trim();
  const message = feedbackFormEl.elements['message'].value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  event.target.reset();
  localStorage.removeItem('feedback-form');
  formData = { email: '', message: '' };
};
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
