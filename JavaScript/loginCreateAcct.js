function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form-mss");

    messageElement.textContext = message;
    messageElement.classList.remove("form-mss-success", "form-mss-error");
    messageElement.classList.add("form-mss- ${type}");

}
// Input message Error
function setInputError(inputElement, message){
    inputElement.classList.add("form-input-error")
    inputElement.parentElement.querySelector(".input-error-mss").textContext = message;
}
function clearInputError(inputElement){
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".input-error-mss").textContext = "";
}

//Toggling between Login and Create Account
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#createAccountLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });
    document.querySelector("#loginLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid Login info")
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>  {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 character");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })
    });

});