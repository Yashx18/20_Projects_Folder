const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let small = document.querySelector('small');
// const smallArr = Array.from(small)

// console.log(small);



function showError(input , message) {
//    console.log(input);

   small.innerHTML = "Error"
   small.className = "error";
   console.log(message);
   
   
}
// showError()
// showError()
function showSuccess(message) {
    // small.forEach((item)=>{
    //     item.innerHTML="Success"
    //     item.style.color="#2ecc71"
    // })
    // for (let i = 0; i < small.length; i++) {
    //     const success = small[i];
    //     success.style.display = 'flex';
    //     success.style.innerHTML = "Success"
    // }
    small.className = "success";
    small.innerHTML = message;
}

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value === '') {

            showError(input)
        } else {
            showSuccess(input)
        }

    });
}
// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault()

    // checkRequired([username, email, password, password2]);
    // checkEmail(email)
    if (username.value === '') {
        showError("Username is Required")
    } else {
        showSuccess()
    }
    if (email.value === '') {
        showError(email,"Email is Required")
    } else if (!checkEmail(email.value)) {
        showSuccess(email,"Email is Required")
    } else {
        showSuccess(email)
    }
    if (password.value === '') {
        showError(password,"Password is Required")
    } else {
        showSuccess(password)
    }
    if (password2.value === '') {
        showError(password2, "Repeat Password is Required")
    } else {
        showSuccess(password2)
    }

})

