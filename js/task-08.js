const form = document.querySelector('form.login-form');
const formInputs = document.querySelectorAll('input');
const formInputsArr = [...formInputs];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formInputsArr.some(input => input.value === "")) {
        let notFilledIn = [];
        formInputsArr.forEach(input => {
            if (input.value === "") {
                notFilledIn.push(input.name);
            }
        })
        const notFilledInString = notFilledIn.join(", ");
        alert(`Fill in fields: ${notFilledInString}`);
    } else {
        const user = {};
    formInputsArr.forEach(input => {
        user[input.name] = input.value;
    })
    console.log(user);
    form.reset();
    }
})



