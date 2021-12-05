const refs = {
  nameOutputRef: document.getElementById('name-output'),
  nameInputRef: document.getElementById('name-input'),
};

const inputHandler = event => {
  refs.nameOutputRef.textContent = event.currentTarget.value;
};

refs.nameInputRef.addEventListener('input', inputHandler);
