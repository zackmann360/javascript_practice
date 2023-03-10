var app = document.querySelector('.app')
var accounts = []
console.log(accounts)
//----------------------------------------------
//  pages
//----------------------------------------------
var pageSignIn = document.querySelector('#pageSignIn')
var pageCreateAccount = document.querySelector('#pageCreateAccount')
var pageSuccess = document.querySelector('#pageSuccess')

//----------------------------------------------
//  signin page
//----------------------------------------------
var pageSignInInputGroupEmail = document.querySelector('#pageSignIninputGroupEmail')
var pageSignInInputGroupPassword = document.querySelector('#pageSignIninputGroupPassword')
var pageSignInEmailInput = pageSignInInputGroupEmail.querySelector('input')
var pageSignInPasswordInput = pageSignInInputGroupPassword.querySelector('input')
var pageSignInButton = app.querySelector('#pageSignInButton')
pageSignInButton.onclick = onclickPageSignInButton
var credentialsText = document.querySelector('.text')
var createAccountLink = document.querySelector('#linkCreateAnAccount')
createAccountLink.onclick = onclickCreateAccountLink


function onclickCreateAccountLink(){
    console.log(this)
    pageSignIn.classList.remove('show')
    pageCreateAccount.classList.add('show')
}

function onclickPageSignInButton(){
    if(!pageSignInEmailInput.value){
        pageSignInInputGroupPassword.classList.add('error')
    }
    if(!pageSignInPasswordInput.value){
        pageSignInInputGroupEmail.classList.add('error')
    }
    if(pageSignInEmailInput.value != 'admin' && pageSignInPasswordInput.value != 'admin'){
        credentialsText.classList.add('wrong')
    }
    if(pageSignInEmailInput.value == 'admin' && pageSignInPasswordInput.value == 'admin'){
        credentialsText.classList.remove('wrong')
        pageSignIn.classList.remove('show')
        pageSuccess.classList.add('show')
    }

    for(var account of accounts){
        console.log(account)
        if(pageSignInEmailInput.value == account.username && pageSignInPasswordInput.value == account.password){
            pageSignIn.classList.remove('show')
            pageSuccess.classList.add('show')
        }
    }
    
}


pageSignInInputGroupEmail.onkeyup = onkeyupPageSignIn
pageSignInInputGroupPassword.onkeyup = onkeyupPageSignIn

function onkeyupPageSignIn(){
    pageSignInButton.classList.add('enabled')
    if(pageSignInEmailInput.value){
        pageSignInInputGroupEmail.classList.remove('error')
    }
    if(pageSignInPasswordInput.value){
        pageSignInInputGroupPassword.classList.remove('error')
    }
}





//----------------------------------------------
//  Create account page
//----------------------------------------------
var signInLink = document.querySelector("#linkSignIn")
signInLink.onclick = onclickSignInLink 
var pageCreatAccountInputGroupEmail = document.querySelector('#pageCreatAccountinputGroupEmail')
var pageCreateAccountInputGroupPassword = document.querySelector('#pageCreateAccountinputGroupPassWord')
var pageCreateAccountEmailInput = pageCreatAccountInputGroupEmail.querySelector('input')
var pageCreateAccountPasswordInput = pageCreateAccountInputGroupPassword.querySelector('input')
var createAccountButton = document.querySelector('#createAccountButton')
createAccountButton.onclick = onclickCreateAccountButton

function onclickCreateAccountButton(){
    if(!pageCreateAccountEmailInput.value){
        pageCreatAccountInputGroupEmail.classList.add('error')
    }
    if(!pageCreateAccountPasswordInput.value){
        pageCreateAccountInputGroupPassword.classList.add('error')
    }
    if(pageCreateAccountEmailInput.value && pageCreateAccountPasswordInput.value){
        pageCreateAccount.classList.remove('show')
        pageSignIn.classList.add('show')
        
        accounts.push(
            {
                username : pageCreateAccountEmailInput.value,
                password : pageCreateAccountPasswordInput.value
            }
        )
    }

    
}


pageCreatAccountInputGroupEmail.onkeyup = onkeyupPageCreateInputGroup
pageCreateAccountInputGroupPassword.onkeyup = onkeyupPageCreateInputGroup

function onkeyupPageCreateInputGroup(){
    createAccountButton.classList.add('enabled')
    if(pageCreateAccountEmailInput.value){
        pageCreatAccountInputGroupEmail.classList.remove('error')
    }
    if(pageCreateAccountPasswordInput.value){
        pageCreateAccountInputGroupPassword.classList.remove('error')
    }
}






function onclickSignInLink(){
    pageCreateAccount.classList.remove('show')
    pageSignIn.classList.add('show')
    console.log(this)
}



//----------------------------------------------
//  success page
//----------------------------------------------
