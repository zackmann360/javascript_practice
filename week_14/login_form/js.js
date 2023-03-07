var app = document.querySelector('.app')
var button = app.querySelector('button')
button.onclick = onclickButton
var inputGroupEmail = app.querySelector('#email')
var emailInput = inputGroupEmail.querySelector('input')
var inputGroupPass = app.querySelector('#pass')
var passInput = inputGroupPass.querySelector('input')


// button.disabled = false
// inputGroupEmail.classList.add('error')
// inputGroupPass.classList.add('error')

inputGroupEmail.onkeyup = onkeyupInput
inputGroupPass.onkeyup = onkeyupInput

function onkeyupInput(){
    button.disabled = true
    if(emailInput.value && passInput.value){
        button.disabled = false
    }
    
}

function onclickButton(){
    
    // add the error by default
    inputGroupEmail.classList.add('error')
    inputGroupPass.classList.add('error')

    // if login info is correct remove the error
    if(emailInput.value === 'admin' && passInput.value === 'admin'){
        inputGroupEmail.classList.remove('error')
        inputGroupPass.classList.remove('error')
        
        
        // remove show from the first app
        app.classList.remove('show')
        // add show to the next app
        var successPage = document.querySelector('#successPage')
        console.log(successPage)
        successPage.classList.add('show')
    }


}







