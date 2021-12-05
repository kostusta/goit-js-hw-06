const rangeInputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

const rangeInputInputHandler = event => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
};

rangeInputRef.addEventListener('input', rangeInputInputHandler);
