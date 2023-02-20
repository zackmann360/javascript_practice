var app = document.querySelector('.app')
// console.log(app)
var inputgroupEmail = app.querySelector('#email')
var inputEmail = inputgroupEmail.querySelector('input')
// console.log(inputEmail)
// console.log(inputgroupEmail)
var inputgroupPass = app.querySelector('#pass')
var inputPass = inputgroupPass.querySelector('input')
// console.log(inputPass)
// console.log(inputgroupPass)
var button = app.querySelector('button')
// console.log(button)
button.onclick = onclickButton

function onclickButton(){
    // console.log(this)
    if(!inputEmail.value){
        inputgroupEmail.classList.add('error')
    }
    if(!inputPass.value){
        inputgroupPass.classList.add('error')
    }
}

inputEmail.onkeyup = onkeyupEmail

function onkeyupEmail(){
    console.log(this)
    inputgroupEmail.classList.remove('error')
}

inputPass.onkeyup = onkeyupPass

function onkeyupPass(){
    inputgroupPass.classList.remove('error')
}


