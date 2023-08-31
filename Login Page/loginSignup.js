//Toggling between Login and Create Account
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signUp");

    document.querySelector("#createAccountLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        signupForm.classList.remove("form-hidden");
    })
    document.querySelector("#loginLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
    })
    document.querySelector("#signUp-btn").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
    })
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid Login info")
    });
})