function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('button.change-color');
const colorOutput = document.querySelector('span.color');
const body = document.querySelector('body');
changeColorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  colorOutput.textContent = getRandomHexColor();
})

