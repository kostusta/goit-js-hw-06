const refs = {
  nameOutputRef: document.getElementById('name-output'),
  nameInputRef: document.getElementById('name-input'),
};

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const inputHandler = event => {
  event.currentTarget.value !== ''
    ? (refs.nameOutputRef.textContent = capitalizeFirstLetter(event.currentTarget.value))
    : (refs.nameOutputRef.textContent = 'Anonymous');
};

refs.nameInputRef.addEventListener('input', inputHandler);
