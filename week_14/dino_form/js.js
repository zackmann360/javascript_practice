// create an array to store your accouts 
var myAccounts = [] 
console.log(myAccounts)
//-------------------------------------------------------------------------------
// login Page
//-------------------------------------------------------------------------------
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

//---------------sign in link---------------------------
var linkSignIn = document.querySelector('#signInLink')
linkSignIn.onclick = onclikcSignInLink

//---------------sign up link---------------------------
var linkCreateAccount = document.querySelector('#createAccountLink')
linkCreateAccount.onclick = onclickCreateAccountLink 


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

    for(var account of myAccounts){
        if(account.username == UsernameInput.value && account.password == PasswordInput.value){
            pageLogin.classList.remove('show')
            pageSuccess.classList.add('show')
        }
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

function onclickCreateAccountLink(){
    pageLogin.classList.remove('show')
    pageCreateAccount.classList.add('show')
}


// dinamic login
// loop over myaccounts



//-------------------------------------------------------------------------------
// Create page
//-------------------------------------------------------------------------------
var pageCreateAccount = document.querySelector('#pageCreateAccount')
var buttonCreateAccount = document.querySelector('#buttonCreateAccount')
var pageCreateAccountUsernameInputGroup = document.querySelector('#createAccountInputGroupUsername')
var pageCreateAccountPasswordInputGroup = document.querySelector('#createAccountInputGroupPass')
var pageCreateAccountUsernameInput = pageCreateAccountUsernameInputGroup.querySelector('input')
var pageCreateAccountPasswordInput = pageCreateAccountPasswordInputGroup.querySelector('input')
buttonCreateAccount.onclick = onclickCreateAccountButton


function onclikcSignInLink(){
    pageCreateAccount.classList.remove('show')
    pageLogin.classList.add('show')
}

pageCreateAccountUsernameInput.onkeyup = onkeyupPageCreateInputUser
pageCreateAccountPasswordInput.onkeyup = onkeyupPageCreateInputPass

function onclickCreateAccountButton(){
    if(pageCreateAccountUsernameInput.value && pageCreateAccountPasswordInput.value){
        pageCreateAccount.classList.remove('show')
        pageLogin.classList.add('show')
    }
    if(!pageCreateAccountUsernameInput.value){
        pageCreateAccountPasswordInputGroup.classList.add('error')
    }
    if(!pageCreateAccountPasswordInput.value){
        pageCreateAccountUsernameInputGroup.classList.add('error')
    }

    myAccounts.push(
        {
            username : pageCreateAccountUsernameInput.value,
            password : pageCreateAccountPasswordInput.value
        }
    )


}

function onkeyupPageCreateInputUser(){
    if(pageCreateAccountUsernameInput.value){
        pageCreateAccountUsernameInputGroup.classList.remove('error')
        buttonCreateAccount.classList.add('enabled')
    }
}

function onkeyupPageCreateInputPass(){
    if(pageCreateAccountPasswordInput.value){
        pageCreateAccountPasswordInputGroup.classList.remove('error')
        buttonCreateAccount.classList.add('enabled')
    }
}
