function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const parentDiv = document.querySelector('div#boxes');
function createBoxes(amount) {
  for (let i = 0; i <= amount-1; i += 1) {
    parentDiv.append(document.createElement('div'));
    const newDivHeight = 30+(10*i);
    const newDivWidth = 30+(10*i);
    parentDiv.children[i].style.height = `${newDivHeight}px`;
    parentDiv.children[i].style.width = `${newDivWidth}px`;
    parentDiv.children[i].style.backgroundColor = getRandomHexColor();
    parentDiv.children[i].classList.add('normalEverydayBox');
  }
}
createBtn.addEventListener('click', () => {
  const divsAmount = document.querySelector('input').value;
  if (divsAmount > 100) {
    const correctedDivsAmount = 100;
    createBoxes(correctedDivsAmount);
    alert("Max allowed value is 100! Creating 100 boxes.");
  } else {
    createBoxes(divsAmount);
  }
  divsAmount > 100 ? document.querySelector('input').value = 100 : divsAmount;
})
destroyBtn.addEventListener('click', () => {
  parentDiv.innerHTML = "";
})