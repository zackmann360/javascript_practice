var app = document.querySelector('.app')
var inputGroupUsername = app.querySelector('#username')
var inputGroupPassword = app.querySelector('#password')
var UsernameInput = inputGroupUsername.querySelector('input')
var PasswordInput = inputGroupPassword.querySelector('input')
var button = app.querySelector('button')
button.onclick = onclickButton
var submitFailed = app.querySelector('.text')
var pageLogin = document.querySelector('#PageLogin')
var pageSuccess = document.querySelector('#PageSuccess')

function onclickButton(){
    if(!UsernameInput.value && !PasswordInput.value){
        inputGroupUsername.classList.add('error')
        inputGroupPassword.classList.add('error')
    }
    if(PasswordInput.value != 'admin' && UsernameInput.value != 'admin'){
        submitFailed.classList.add('wrong')
    }
    if(PasswordInput.value === 'admin' && UsernameInput.value === 'admin'){
        pageLogin.classList.remove('show')
        pageSuccess.classList.add('show')
    }
}

inputGroupUsername.onkeyup = onkeyupUser
inputGroupPassword.onkeyup = onkeyupPass

function onkeyupUser(){
    if(UsernameInput.value){
        inputGroupUsername.classList.remove('error')
    }
}

function onkeyupPass(){
    if(PasswordInput.value){
        inputGroupPassword.classList.remove('error')
    }
}