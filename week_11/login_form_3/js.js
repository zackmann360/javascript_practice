// ------------------------------------------------------------------
// login Page
// ------------------------------------------------------------------
var app = document.querySelector('.app')
var form = app.querySelector('.form#loginPage')
var button = form.querySelector('button')
var inputGroupEmail = form.querySelector('#inputGroupEmail')
var inputEmail = inputGroupEmail.querySelector('input')
console.log(inputEmail)
var inputGroupPass = form.querySelector('#inputGroupPass')
var inputPass = inputGroupPass.querySelector('input')
console.log(inputPass)
button.onclick = onclickButton

function onclickButton(event){
    console.log(event)
    // 1. show error when you click the button

    // 2. only show error is input value is empty
    if(inputEmail.value == false){
        inputGroupEmail.classList.add('error')
    }
    if(!inputPass.value){
        inputGroupPass.classList.add('error')
    }



    // 3. show authentication error
    // when email and password are empty
    if(inputEmail.value.length && inputPass.value.length > 0){
        form.classList.add('error')
    }

    // 4. show successpage
    // if email value is "123" and password value is "123" show success page
    if( inputEmail.value == '123' && inputPass.value == '123'){
        app.classList.add('success')
    }
}


// 2. when you type into the input remove error message from its group

inputEmail.onkeydown = onkeydownEmail

inputPass.onkeydown = onkeydownPass

function onkeydownEmail(event){
    inputGroupEmail.classList.remove('error')
}

function onkeydownPass() {
    inputGroupPass.classList.remove('error')
}


// ------------------------------------------------------------------
// success Page
// ------------------------------------------------------------------


