let counterValue = 0;

const refs = {
  decrementBtnRef: document.querySelector('button[data-action="decrement"]'),
  incrementBtnRef: document.querySelector('button[data-action="increment"]'),
  valueRef: document.getElementById('value'),
};

const counterValueClickHandler = event => {
  if (event.currentTarget.dataset.action === 'decrement') {
    counterValue -= 1;
  } else if (event.target.dataset.action === 'increment') {
    counterValue += 1;
  }
  refs.valueRef.textContent = counterValue;
};

refs.decrementBtnRef.addEventListener('click', counterValueClickHandler);
refs.incrementBtnRef.addEventListener('click', counterValueClickHandler);
