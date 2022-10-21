let greetedOne = "";
const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');
textOutput.textContent = "Anonymous";
textInput.addEventListener("input", (event) => {
    greetedOne = event.currentTarget.value;
    textOutput.textContent = greetedOne === "" ? "Anonymous" : greetedOne;
  });
