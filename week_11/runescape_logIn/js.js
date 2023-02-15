var app = document.querySelector('.app')

var button = app.querySelector('button')
var input = app.querySelector('input ')

input.onkeyup = onkeyupKey

function onkeyupKey(){
    console.log('test')
    button.disabled = true

    if(input.value.length > 0){
        button.disabled = false
    }
}