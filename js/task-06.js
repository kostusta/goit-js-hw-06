const inputRef = document.getElementById('validation-input');

const inputSymbolsCountHandler = event => {
  if (event.currentTarget.value.split('').length >= Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', inputSymbolsCountHandler);
