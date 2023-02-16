var app = document.querySelector('.app')
// console.log(app)
var button = app.querySelector('button')
button.onclick = onclickButton
// console.log(button)
var inputGroupEmail = app.querySelector('#email')
var inputEmail = inputGroupEmail.querySelector('input')
// console.log(inputGroupEmail)
var inputGroupPass = app.querySelector('#password')
var inputPass = inputGroupPass.querySelector('input')   
// console.log(inputGroupPass)


function onclickButton(){
    // console.log(this)
    //if the input.value is false show the error
    if(inputEmail.value == false){
        inputGroupEmail.classList.add('error')
    }

    if(inputPass.value == false){
        inputGroupPass.classList.add('error')
    }


    // part 2
    // add hint when you click the button

    // if input.values does not equal 123 show the hint
    if(inputEmail.value.length > 0 && inputPass.value.length > 0){
        // console.log('input has a value')
        app.classList.add('hint')
        
    }

    // part 3
    // switch to success state is user and pass match
    if(inputEmail.value === "123" && inputPass.value === "123"){
        // console.log('it matches')
        app.classList.add('success')
    }

}

inputEmail.onkeydown = onkeydownDown
inputPass.onkeydown = onkeydownDown

function onkeydownDown(){
    // console.log(this.parentElement)
    this.parentElement.classList.remove('error')
}
