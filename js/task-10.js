function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  numberRef: document.querySelector('#controls > input'),
  buttonCreateRef: document.querySelector('button[data-create]'),
  buttonDestroyRef: document.querySelector('button[data-destroy]'),
  boxesRef: document.getElementById('boxes'),
};

const createBoxes = () => {
  const amount = refs.numberRef.value;
  let boxSideSize = 30;
  const markupArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const markupTemplate = `<div style="width:${boxSideSize}px; height:${boxSideSize}px; background-color:${getRandomHexColor()}"></div>`;
    boxSideSize += 10;
    markupArray.push(markupTemplate);
  }

  const resultMarkupString = markupArray.join('');
  refs.boxesRef.insertAdjacentHTML('afterbegin', resultMarkupString);
  refs.numberRef.value = '';
};

const destroyBoxes = () => {
  refs.boxesRef.innerHTML = '';
};

refs.buttonCreateRef.addEventListener('click', createBoxes);
refs.buttonDestroyRef.addEventListener('click', destroyBoxes);
