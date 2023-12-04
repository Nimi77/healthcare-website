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
    
    function showLoginForm(){
        document.querySelector("#signUp-btn").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form-hidden");
            signupForm.classList.add("form-hidden");
        })
    }
   

    // validation for the login form before submission
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let username = document.getElementById("username")

    const formLogin = document.getElementById("loginForm");
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (email.value == "" || password.value == ""){
            alert("Input your details")
        }else{
            alert("form submitted successfully");
            console.log(`$(email.value)`)
        };
        email.value = "";
        password.value = "";
        // setFormMessage(loginForm, "error", "Invalid Login info")
    });
    
    const formSignup = document.getElementById("signupForm");
    formSignup.addEventListener("submit", (e) => {
        e.preventDefault();
        if(email.value == null || username.value == null || password.value == null ){
            alert("You can't login")
        }
        else{
            alert("You can login") ;
            showLoginForm();
        }
     
    })
})