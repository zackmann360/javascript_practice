var app = document.querySelector('.app')
var inputGroupCardNum = app.querySelector('#inputGroupCardNum')
var inputCardNumber = inputGroupCardNum.querySelector('input')
// listen for on focus
inputCardNumber.onfocus = onfocusCardNum
var inputGroupCardHolder = app.querySelector('#inputGroupCardHolder')
var inputCardHolder = inputGroupCardHolder.querySelector('input')
inputCardHolder.onfocus = onfocusCardHolder
var inputGroupSelects = app.querySelectorAll('#date')
var inputGroupCvv = app.querySelector('#cvv')
console.log(inputGroupCvv)
var inputCvv = inputGroupCvv.querySelector('input')
inputCvv.onfocus = onfocusCvv



function onfocusCvv(){
    removeHighlightFromCurrent()
}

for(var select of inputGroupSelects){
    select.onclick = onfocusSelect
}

function onfocusSelect(){
    removeHighlightFromCurrent()

    var cardExpires = app.querySelector('#expires')
    cardExpires.classList.add('highlight')
}


function onfocusCardHolder(){
    //remove highlight from current
    // var currentHighlight = app.querySelector('.highlight')
    // if(currentHighlight){
    //     currentHighlight.classList.remove('highlight')
    // }
    removeHighlightFromCurrent()
    //add highlight to card Holder
    var cardHolder = app.querySelector('#cardHolder')
    cardHolder.classList.add('highlight')

    
}

function onfocusCardNum(){
    removeHighlightFromCurrent()
    
    // add highlihgt to card numbers
    var cardNumbers = app.querySelector('#cardNumbers')
    cardNumbers.classList.add('highlight')
}

function removeHighlightFromCurrent(){
    //remove highlight from current
    var currentHighlight = app.querySelector('.highlight')
    if(currentHighlight){
        currentHighlight.classList.remove('highlight')
    }
} 