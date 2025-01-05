const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//showError function
function showError(input){
    const formControl = input.parentElement
    formControl.classList = "form-control flex-direction-column error"
    
}
//showError function
function showSuccess(input){
    const formControl = input.parentElement
     formControl.classList = "form-control flex-direction-column success"
}


//Event Listeners
form.addEventListener('submit',(e) => {
    e.preventDefault();
    if (username.value === '') {
        showError(username);
    }else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email);
    }else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password);
    }else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2);
    }else {
        showSuccess(password2);
    }
    
})