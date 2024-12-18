// // const min = 1
// // const max = 6

// // console.log(Math.floor(Math.random() * (max-min+1)) + min);

// let myDate = new Date()
// console.log(myDate.toLocaleDateString());

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mode = document.getElementById('dark-mode');


// Functions used in this Project :


// Show Error :
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control flex-direction-column error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success :
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control flex-direction-column success'
}

// Check Email is Valid :
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }
  

  // All the Event Listeners :
form.addEventListener('submit', function (e) {
    e.preventDefault()

    //Validations
    if (username.value === '') {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, "Email is required");
    } else if (checkEmail(email.value)) {
        showError(email, "Email is required");
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, "Confirm Password is required");
    } else {
        showSuccess(password2);
    }
})

mode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})


// Code Check for Tutorial.

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const ans = myNumbers.forEach( (nums)=> {
//     return console.log(nums);
    
// } )
// console.log(ans);
