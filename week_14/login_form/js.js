var app = document.querySelector('.app')
var groupEmail = app.querySelector('#groupEmail')
var emailInput = groupEmail.querySelector('input')
var groupPass = app.querySelector('#groupPass')
var inputPass = groupEmail.querySelector('input')
var button = app.querySelector('button')
button.onclick = onclickButton

groupEmail.onkeyup = onkeyupEmail
groupPass.onkeyup = onkeyupPass


function onkeyupEmail(){

    console.log('email')
    button.classList.add('enabled')
    groupEmail.classList.add('error')
    groupPass.classList.add('error')
    if(groupEmail.value = true){
        groupEmail.classList.remove('error')
    }
    
}

function onkeyupPass(){
    console.log('pass')
    button.classList.add('enabled')
    if(groupPass.value = true){
        groupPass.classList.remove('error')
    }

    
}

function onclickButton(){
    console.log(this)
    if(emailInput.value != "admin" && inputPass.value != 'admin' ){
        groupEmail.classList.add('error')
        groupPass.classList.add('error')
    }

    if(emailInput.value === "admin" && inputPass.value === 'admin' ){
        console.log('yes')
        var current = document.querySelector('.show')
        current.classList.remove('show')
        var success = document.querySelector('.success')
        success.classList.add('show')
    }


}
