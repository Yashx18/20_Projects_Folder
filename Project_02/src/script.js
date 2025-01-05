const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let small = document.querySelector('small');

//showError Function
function showError(input, message){
    const formControl = input.parentElement
    formControl.classList = "form-control input-section error"
    small = formControl.querySelector('small')
    small.innerText = message
}

//showSuccess Function
function showSuccess(input, message){
    const formControl = input.parentElement
    formControl.classList = "form-control input-section success"
    small = formControl.querySelector('small')
    small.innerText = message
}

// To Validate Username
function validateUsername(input){
    const username = input.value
    // console.log(username);
    
    if (username.length > 20){
        small.innerHTML="Username cannot be more than 20 Charachters"
    }
}
//Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value === '') {
        showError(username, "Enter Username")
    } else {
        showSuccess(username, "Success")
        validateUsername(username);
    }
    if (email.value === '') {
        showError(email, "Enter Email")
    } else {
        showSuccess(email, "Success")
    }
    if (password.value === '') {
        showError(password, "Enter Password")
    } else {
        showSuccess(password,"Success")
    }
    if (password2.value === '') {
        showError(password2, "Enter Password Again")
    } else {
        showSuccess(password2,"Success")
    }
})