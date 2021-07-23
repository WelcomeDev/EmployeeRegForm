let passwordField = document.getElementById("password");
passwordField.addEventListener("input", (event) => {
    passwordField.setCustomValidity('');

    if (!!passwordField.validity.valid) {
        passwordField.setCustomValidity("");
    } else if (passwordField.value.length < 6) {
        passwordField.setCustomValidity("Password length must be equal or bigger than 6");
    } else {
        passwordField.setCustomValidity("Password must contain capital, lowercase letters and digits");
    }
});

let phoneField = document.getElementById("phone");
phoneField.oninput = (event) => {
    phoneField.setCustomValidity('');

    if (!!phoneField.validity.valid) {
        phoneField.setCustomValidity("");
    } else if (!phoneField.value.toString().startsWith('+7')) {
        phoneField.setCustomValidity("Phone must starts with +7");
    } else {
        phoneField.setCustomValidity("You're missing some digits");
    }
};

let nameField = document.getElementById("full_name");
nameField.oninput = (event) => {
    nameField.setCustomValidity('');
    if (!!nameField.validity.valid) {
        nameField.setCustomValidity("");
    }
    else {
        nameField.setCustomValidity("Sorry, full name can't be shorter than 2 symbols");
    }
}