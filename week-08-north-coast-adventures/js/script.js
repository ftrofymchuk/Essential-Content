const form = document.querySelector(".enquiry-form");

const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const firstNameError =
    document.querySelector("#first-name-error");

const emailError =
    document.querySelector("#email-error");

const messageError =
    document.querySelector("#message-error");

form.addEventListener("submit", function (event) {

  
    console.log("JavaScript is connected.");

    event.preventDefault();

    let formIsValid = true;

    // Validation checks will be added here.

    if (firstName.value.trim() === "") {
    firstNameError.textContent =
        "Enter your first name.";

    firstName.classList.add("input-error");
    firstName.setAttribute("aria-invalid", "true");

    formIsValid = false;
} else {
    firstNameError.textContent = "";

    firstName.classList.remove("input-error");
    firstName.removeAttribute("aria-invalid");
}

if (email.value.trim() === "") {
    emailError.textContent =
        "Enter your email address.";

    email.classList.add("input-error");
    email.setAttribute("aria-invalid", "true");

    formIsValid = false;
} else if (email.validity.typeMismatch) {
    emailError.textContent =
        "Enter a valid email address.";

    email.classList.add("input-error");
    email.setAttribute("aria-invalid", "true");

    formIsValid = false;
} else {
    emailError.textContent = "";

    email.classList.remove("input-error");
    email.removeAttribute("aria-invalid");
}

if (message.value.trim() === "") {
    messageError.textContent =
        "Enter a message.";

    message.classList.add("input-error");
    message.setAttribute("aria-invalid", "true");

    formIsValid = false;
} else if (message.value.trim().length < 20) {
    messageError.textContent =
        "Your message must contain at least 20 characters.";

    message.classList.add("input-error");
    message.setAttribute("aria-invalid", "true");

    formIsValid = false;
} else {
    messageError.textContent = "";

    message.classList.remove("input-error");
    message.removeAttribute("aria-invalid");
}

if (formIsValid) {
    console.log("The form information is valid.");
} else {
    console.log("The form contains errors.");
}
})