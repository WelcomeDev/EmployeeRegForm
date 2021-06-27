let invalidInputBorder = "red 1px solid";
let validInputBorder = "";

let passwordField = document.getElementById("password");
// passwordField.oninput = (event) => {
//     console.log(`Validity - ${passwordField.checkValidity()}`)
//     if (passwordField.checkValidity() === true) {
//         passwordField.style.border = validInputBorder;
//         passwordField.setCustomValidity("");
//     } else {
//         passwordField.style.border = invalidInputBorder
//         passwordField.setCustomValidity("Password must contain capital, lowercase letters and digits");
//     }
//
// }

passwordField.addEventListener("input", (event)=>
{
    console.log(`Validity - ${passwordField.checkValidity()} ${passwordField.validity.valid}`)
    if (passwordField.checkValidity() === true) {
        passwordField.style.border = validInputBorder;
        passwordField.setCustomValidity("");
    } else {
        passwordField.style.border = invalidInputBorder
        passwordField.setCustomValidity("Password must contain capital, lowercase letters and digits");
    }
});