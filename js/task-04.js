let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.getElementById('value');

const counterValueClickHandler = event => {
  if (event.currentTarget.dataset.action === 'decrement') {
    counterValue -= 1;
  } else if (event.target.dataset.action === 'increment') {
    counterValue += 1;
  }
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener('click', counterValueClickHandler);
incrementBtnRef.addEventListener('click', counterValueClickHandler);
