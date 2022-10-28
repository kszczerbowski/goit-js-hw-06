function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const parentDiv = document.querySelector('div#boxes');
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    parentDiv.append(document.createElement('div'));
  }
  for (let i = 0; i <= amount-1; i += 1) {
    if (i!==0) {
      const newDivHeight = parseFloat(parentDiv.children[i-1].style.height)+10;
      const newDivWidth = parseFloat(parentDiv.children[i-1].style.height)+10;
      parentDiv.children[i].style.height = `${newDivHeight}px`;
      parentDiv.children[i].style.width = `${newDivWidth}px`;
    }
    if (i===0) {
      parentDiv.children[i].style.height = "30px";
      parentDiv.children[i].style.width = "30px";
    }
    parentDiv.children[i].style.backgroundColor = getRandomHexColor();
    parentDiv.children[i].style.margin = "5px";
    parentDiv.children[i].style.border = "solid black 1px";
  }
}
createBtn.addEventListener('click', () => {
  const divsAmount = document.querySelector('input').value;
  createBoxes(divsAmount);
})
destroyBtn.addEventListener('click', () => {
  parentDiv.innerHTML = "";
})