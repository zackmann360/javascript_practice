var app = document.querySelector('.app')
var bigNav = document.querySelector('#bigNav')
var slimNav = document.querySelector('#slimNav')

var openSlimNav = document.querySelector('#OpenSlimNav')
openSlimNav.onclick= onclickOpenSlim
var openBigNav = document.querySelector('#openBigNav')
openBigNav.onclick = onclickOpenBig


var dropDowns = app.querySelectorAll('.dropDown')
var slimNavDropDowns = slimNav.querySelectorAll('.dropDown')

for(var slimNavDropDown of slimNavDropDowns){
    slimNavDropDown.onclick = onclickSlimNavDropDown
}

function onclickSlimNavDropDown(){
    
    slimNav.classList.remove('openNav')
    bigNav.classList.add('openNav')

    // open dropdown when you click on the dropdown
    console.log(this)
    var attribute = this.getAttribute("dropDownName")
    console.log('#' + attribute) 
}


for(var dropdown of dropDowns){
    dropdown.onclick = onclickDropDown
}

function onclickDropDown(){
    this.classList.toggle('open')
}

function onclickOpenBig(){
    console.log(this)
    slimNav.classList.remove('openNav')
    bigNav.classList.add('openNav')
}

function onclickOpenSlim(){
    bigNav.classList.remove('openNav')
    slimNav.classList.add('openNav')
}