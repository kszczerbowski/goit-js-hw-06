const textInput = document.querySelector('input#validation-input');
textInput.addEventListener("blur", () => {
    const wordLength = textInput.value.length;
    const dataLengthFloat = parseFloat(textInput.dataset.length);
    if (wordLength === dataLengthFloat) {
        if (textInput.classList.contains("invalid")) {
            textInput.classList.remove("invalid");
        }
        textInput.classList.add("valid");
    }
    if (wordLength !== dataLengthFloat) {
        if (textInput.classList.contains("valid")) {
            textInput.classList.remove("valid"); 
        }
        textInput.classList.add("invalid");
    }
  });