let inputEls = document.querySelectorAll('input')

let formEl = document.querySelector('.form')

let submitBtnEL = document.querySelector('#submit-btn')


let usernameEl = document.querySelector('#username')
let emailEl = document.querySelector('#email')
let passwordEl = document.querySelector('#password')
let confirmPasswordEl = document.querySelector('#confirm-password')
// let smallEl = document.querySelector('small')

formEl.addEventListener('submit', (e) => {
    e.preventDefault()


    checkRequired([usernameEl, emailEl, passwordEl, confirmPasswordEl])
    checkLength(usernameEl, 3, 15)
    checkLength(passwordEl, 6, 25)
    checkEmail(emailEl)
    checkPasswordsMatch(passwordEl, confirmPasswordEl)
})


function showError(input, message) {
    let formContainerEl = input.parentElement
    formContainerEl.className = 'form-container error'
    const smallEl = formContainerEl.querySelector('small');
    smallEl.innerText = message;
}



function showSuccess(input) {
    input.parentElement.className = 'form-container success'
}




function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}


function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      }
    });
  }



function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less than ${max}`)
    } else {
        showSuccess(input)
    }
}
  

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match')
    }
}