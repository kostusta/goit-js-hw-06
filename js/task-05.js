const nameOutputRef = document.getElementById('name-output');
const nameInputRef = document.getElementById('name-input');

const inputHandler = event => {
  nameOutputRef.textContent = event.currentTarget.value;
};

nameInputRef.addEventListener('input', inputHandler);
