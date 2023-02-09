
var menuButton = document.querySelector('.menuButton')
menuButton.onclick = openMenu
var dropdown = document.querySelector('.dropDown')
dropdown.onclick = notAButton

function openMenu(event){
    // console.log(this)
    // console.log(dropadown)
    dropdown.classList.toggle('displayNone')
    event.stopPropagation()
}

var body = document.querySelector('body')
// console.log(body)
body.onclick = close

function close(){
    console.log(this)
    dropdown.classList.add('displayNone')
}

function notAButton(not){
    console.log(dropdown)
    not.stopPropagation()
}

