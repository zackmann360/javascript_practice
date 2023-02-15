//----------------------------------------------------------
// login page
//----------------------------------------------------------
var appLogin = document.querySelector('#pageLogin.app')


var inputGroupUser = appLogin.querySelector('#user.inputGroup')
var inputUser = inputGroupUser.querySelector('input')
var inputGroupPass = appLogin.querySelector('#password.inputGroup')
var inputPass = inputGroupPass.querySelector('input')

var button  = appLogin.querySelector('button')
button.onclick = onclickButton

function onclickButton(){
    console.log(this)
    if(inputUser.value == false){
        inputGroupUser.classList.add('error')
    }

    
    if(!inputPass.value){
        inputGroupPass.classList.add('error')
    }

}

// console log when you click a key
// how to get the eventlistener keyDown

inputUser.onkeydown = onkeydownInputUser

function onkeydownInputUser(){
    // remove error when you start typing
    inputGroupUser.classList.remove('error')
}

inputPass.onkeydown = onkeydownInputPass

function onkeydownInputPass(){
    inputGroupPass.classList.remove('error')
}

//----------------------------------------------------------
// register page 
//----------------------------------------------------------

var appRegister = document.querySelector('#pageRegister.app')

var rInputGroupUser = appRegister.querySelector('#user.inputGroup')
var rInputUser = rInputGroupUser.querySelector('input')
// console.log(rInputUser)
var rInputGroupPass = appRegister.querySelector('#password.inputGroup')
var rInputPass = rInputGroupPass.querySelector('input')
// console.log(rInputPass)
var rInputGroupReTypePass = appRegister.querySelector('#reTypepassword.inputGroup')
rInputRetypePass = rInputGroupReTypePass.querySelector('input')
// console.log(rInputRetypePass)

var rButton = appRegister.querySelector('button')
//console.log(rInputGroupUser, rInputGroupPass, rInputGroupReTypePass, rButton)

rButton.onclick = onclickRbutton

function onclickRbutton(){
    // console.log(this)
    // if the inputs doesnt have letters show the error
    if(rInputUser.value == false){
        rInputGroupUser.classList.add('error')
    }
    if(rInputPass.value == false){
        rInputGroupPass.classList.add('error')
    }
    if(rInputRetypePass.value == false){
        rInputGroupReTypePass.classList.add('error')
    }
}

rInputUser.onkeydown = onkeyDownRuser

function onkeyDownRuser(){
    // console.log('test')
    // remove error when you type
    rInputGroupUser.classList.remove('error')
}

rInputPass.onkeydown = onkeydownRpass

function onkeydownRpass(){
    // console.log('test')
    rInputGroupPass.classList.remove('error')
}

rInputRetypePass.onkeydown = onkeyDownRretyp

function onkeyDownRretyp(){
    // console.log('test')
    rInputGroupReTypePass.classList.remove('error')
}












