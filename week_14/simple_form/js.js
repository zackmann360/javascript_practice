var accounts = [
    {
        username : 'admin',
        password : 'admin'
    }
]
console.log(accounts)
// ----------------------------------------------------------
// pages
// ----------------------------------------------------------
var pageLogIn = document.querySelector('#pageLogIn')
var pageCreate = document.querySelector('#pageCreate')
var pageSuccess = document.querySelector('#pageSuccess')
var pageAccountCreated = document.querySelector('#pageCreateSuccess')

// ----------------------------------------------------------
// page login
// ----------------------------------------------------------

var pageLoginInputgroupEmail = document.querySelector('#pageLoginInputGroupEmail')
var pageLoginInputgroupPassword = document.querySelector('#pageLoginInputGroupPassword')
var pageLoginEmailInput = pageLoginInputgroupEmail.querySelector('input')
var pageLoginPasswordInput = pageLoginInputgroupPassword.querySelector('input')
var pageLoginButton = document.querySelector('#pageLoginButton')
pageLoginButton.onclick = onclickLogin
var pageLogInCreateButton = document.querySelector('#pageCreateAccountLink')
pageLogInCreateButton.onclick = onclickCreateAccount
var pageLogInButtonGroup = document.querySelector('#buttonGroupLogin')


function onclickCreateAccount(){
    pageLogIn.classList.remove('show')
    pageCreate.classList.add('show')

    pageLoginEmailInput.value = ''
    pageLoginPasswordInput.value = ''

    pageLogInButtonGroup.classList.remove('wrong')
    pageLoginInputgroupPassword.classList.remove('error')
    pageLoginInputgroupEmail.classList.remove('error')
    
}

function onclickLogin(){
    var email = pageLoginEmailInput.value
    var pass = pageLoginPasswordInput.value
    if(!email){
        pageLoginInputgroupEmail.classList.add('error')
    }
    if(!pass){
        pageLoginInputgroupPassword.classList.add('error')
    }

    // if the email and input equal account email and password 
    for(var account of accounts){
        if(email == account.username && pass == account.password){
            pageLogIn.classList.remove('show')
            pageSuccess.classList.add('show')
        }
    }
    //show success page
    
    if(email && pass){
        pageLogInButtonGroup.classList.add('wrong')
    }
    
    
    
}

pageLoginInputgroupEmail.onkeyup = onkeyupLogin
pageLoginInputgroupPassword.onkeyup = onkeyupLogin

function onkeyupLogin(){
    if(pageLoginEmailInput.value ){
        pageLoginInputgroupEmail.classList.remove('error')
        pageLoginButton.disabled = false
    }
    if(pageLoginPasswordInput.value){
        pageLoginInputgroupPassword.classList.remove('error')
        pageLoginButton.disabled = false
    }
}

// ----------------------------------------------------------
// page create account
// ----------------------------------------------------------

var pageCreateEmailInputgroup = document.querySelector('#pageCreateInputGroupEmail')
var pageCreatePasswordInputgroup = document.querySelector('#pageCreateInputGroupPassword')
var pageCreateEmailInput = pageCreateEmailInputgroup.querySelector('input')
var pageCreatePasswordInput = pageCreatePasswordInputgroup.querySelector('input')
var pageCreateButton = document.querySelector('#pageCreateButton')
pageCreateButton.onclick = onclickCreate
var pageCreateSignInLink = document.querySelector('#pageSigninLink')
pageCreateSignInLink.onclick = onclickSignInLink

function onclickSignInLink(){
    pageCreate.classList.remove('show')
    pageLogIn.classList.add('show')

    pageCreateEmailInputgroup.classList.remove('error')
    pageCreatePasswordInputgroup.classList.remove('error')
    pageCreateEmailInputgroup.classList.remove('error')
    pageCreateEmailInput.value = ''
    pageCreatePasswordInput.value = ''
}

function onclickCreate(){
    var user = pageCreateEmailInput.value
    var pass = pageCreatePasswordInput.value
    
    if(!user){
        pageCreateEmailInputgroup.classList.add('error')
    }
    if(!pass){
        pageCreatePasswordInputgroup.classList.add('error')
    }

    if(user && pass){
        pageCreate.classList.remove('show')
        pageAccountCreated.classList.add('show')

        accounts.push(
            {
                username : user,
                password : pass
            }
        )
    }

    
}

pageCreateEmailInputgroup.onkeyup = onkeyupPageCreate
pageCreatePasswordInputgroup.onkeyup = onkeyupPageCreate

function onkeyupPageCreate(){
    if(pageCreateEmailInput.value){
        pageCreateEmailInputgroup.classList.remove('error')
    }
    if(pageCreatePasswordInput.value){
        pageCreatePasswordInputgroup.classList.remove('error')
    }    
}

// ----------------------------------------------------------
// Account Created
// ----------------------------------------------------------
var gotToLoginButton = document.querySelector('#goToLogin')
gotToLoginButton.onclick = onclickGoToLogin

function onclickGoToLogin(){
    pageAccountCreated.classList.remove('show')
    pageLogIn.classList.add('show')
}



