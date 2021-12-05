const formRef = document.querySelector('.login-form');

const formSubmitHandler = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!(email.value && password.value)) {
    alert('All form fields must be completed.');
  } else {
    console.log(`Emaiil: ${email.value}\nPassword: ${password.value}`);
    event.currentTarget.reset();
  }
};

formRef.addEventListener('submit', formSubmitHandler);

