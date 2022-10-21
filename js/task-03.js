const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('ul.gallery');
const arrOfElements = [];
images.forEach(value => {
  const listElement = document.createElement("li");
  listElement.classList.add("task3Item");
  const image = document.createElement("img");
  image.classList.add("task3Image");
  image.src = value.url;
  image.alt = value.alt;
  listElement.append(image);
  arrOfElements.push(listElement.outerHTML);
});
const markup = arrOfElements.join("");
list.insertAdjacentHTML("afterbegin", markup);
