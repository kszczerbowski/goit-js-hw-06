let counterValue = 0;
const counter = document.querySelector('span#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const clickIncrement = () => {
    counterValue++;
    counter.innerHTML = counterValue;
}
const clickDecrement = () => {
    counterValue--;
    counter.innerHTML = counterValue;
}
btnDecrement.addEventListener("click", clickDecrement);
btnIncrement.addEventListener("click", clickIncrement);