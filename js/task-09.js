function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorSpanRef: document.querySelector('.color'),
  buttonRef: document.querySelector('.change-color'),
  bodyRef: document.body,
};

const buttonClickHandler = () => {
  const randonColor = getRandomHexColor();
  refs.colorSpanRef.textContent = randonColor;
  refs.bodyRef.style.backgroundColor = randonColor;
};

refs.buttonRef.addEventListener('click', buttonClickHandler);
