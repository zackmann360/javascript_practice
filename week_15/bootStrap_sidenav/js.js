var app = document.querySelector('.app')

var bigNav = document.querySelector('#bigNav')
var slimNav = document.querySelector('#slimNav')

var openSlimNav = document.querySelector('#showSlimNav')
openSlimNav.onclick = onclickOpenSlim
var openBigNav = document.querySelector('#showBigNav')
openBigNav.onclick = onclickOpenBig

var bigNavdropDowns = bigNav.querySelectorAll('.tabDrop')
var slimNavDropDowns = slimNav.querySelectorAll('.tabDrop')

for(var dropDown of slimNavDropDowns){
    dropDown.onclick = onclickDropDownOpen
}

function onclickDropDownOpen(){
    slimNav.classList.remove('showNav')
    bigNav.classList.add('showNav')

    var tabAttribute = this.getAttribute('tabDrop')
    var selected = document.querySelector('.' + tabAttribute)
    selected.classList.add('openDrop')
}


for(var dropDown of bigNavdropDowns){
    dropDown.onclick = onclickDropDown
}

function onclickDropDown(){
    this.classList.toggle('openDrop')
}

function onclickOpenBig(){
    slimNav.classList.remove('showNav')
    bigNav.classList.add('showNav')
    // slimNav.classList.add('closed')
}


function onclickOpenSlim(){
    bigNav.classList.remove('showNav')
    slimNav.classList.add('showNav')
    // openBigNav.classList.add('closed')
    console.log(this)
    

    var currents = document.querySelectorAll('.openDrop')
    for(var current of currents){
        current.classList.remove('openDrop')
    }

}