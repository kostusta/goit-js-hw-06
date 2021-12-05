function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

const buttonClickHandler = event => {
  const randonColor = getRandomHexColor();
  colorSpanRef.textContent = randonColor;
  bodyRef.style.backgroundColor = randonColor;
};

buttonRef.addEventListener('click', buttonClickHandler);
