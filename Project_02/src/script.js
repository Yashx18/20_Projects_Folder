const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const small = document.querySelectorAll('small');
// const smallArr = Array.from(small)

// console.log(small);



function showError(input) {
    // small.forEach((item)=>{
    //     item.style.display='flex'
    // })
    for (let i = 0; i < small.length; i++) {
        const error = small[i];
        error.style.display = 'flex'
    }

}
function showSuccess(input) {
    // small.forEach((item)=>{
    //     item.innerHTML="Success"
    //     item.style.color="#2ecc71"
    // })
    for (let i = 0; i < small.length; i++) {
        const success = small[i];
        success.style.display = 'flex';
        success.style.innerHTML = "Success"
    }
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
        showError(e)
    } else {
        showSuccess(e)
    }
    if (email.value === '') {
        showError(e)
    } else if (!checkEmail(email.value)) {
        showSuccess(e)
    } else {
        showSuccess(e)
    }
    if (password.value === '') {
        showError(e)
    } else {
        showSuccess(e)
    }
    if (password2.value === '') {
        showError(e)
    } else {
        showSuccess(e)
    }

})

