const textInput = document.querySelector('input#validation-input');
textInput.addEventListener("blur", () => {
    const wordLength = textInput.value.length;
    const dataLengthFloat = parseFloat(textInput.dataset.length);
    if (wordLength === dataLengthFloat) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid"); 
        textInput.classList.add("invalid");
    }
  });