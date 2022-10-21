const zipper = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');
abracadabra.style.fontSize = `${zipper.value}px`;
zipper.addEventListener("input", () => {
    abracadabra.style.fontSize = `${zipper.value}px`;
})