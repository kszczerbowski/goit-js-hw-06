const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul#ingredients');
const arrOfElements = [];
ingredients.forEach(value => {
  const listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.textContent = value;
  arrOfElements.push(listElement.outerHTML);
});
const markup = arrOfElements.join("");
list.innerHTML = markup;
