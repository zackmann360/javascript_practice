var app = document.querySelector('.app')
var pageLogin = document.querySelector('#pageLogin')
var pageSuccess = document.querySelector('#pageSuccess')
// select the input groups
var inputGroupUsername = app.querySelector('#inputGroupUsername')
var inputGroupPassword = app.querySelector('#inputGroupPass')
// get the input of each input group
var UsernameInput = inputGroupUsername.querySelector('input')
var PasswordInput = inputGroupPassword.querySelector('input')
// get the button
var buttonGroup = app.querySelector('.buttonGroup')
var button = app.querySelector('button')
button.onclick = onclickButton


function onclickButton(){
    console.log(this)
    if(UsernameInput.value != 'admin' && PasswordInput.value != 'admin'){
        buttonGroup.classList.add('wrong')        
    }
    if(UsernameInput.value === 'admin' && PasswordInput.value === 'admin'){
        buttonGroup.classList.remove('wrong')
        pageLogin.classList.remove('show')
        pageSuccess.classList.add('show')
    }
}

inputGroupUsername.onkeyup = onkeyupInput
inputGroupPassword.onkeyup = onkeyupInput

function onkeyupInput(){
    button.classList.add('enabled')
    inputGroupPassword.classList.add('error')
    inputGroupUsername.classList.add('error')
    if(UsernameInput.value){
        inputGroupUsername.classList.remove('error')
    }
    if(PasswordInput.value){
        inputGroupPassword.classList.remove('error')
    }
}