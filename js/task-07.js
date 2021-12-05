const refs = {
  rangeInputRef: document.getElementById('font-size-control'),
  spanRef: document.getElementById('text'),
};

const rangeInputInputHandler = event => {
  refs.spanRef.style.fontSize = `${event.currentTarget.value}px`;
};

refs.rangeInputRef.addEventListener('input', rangeInputInputHandler);
