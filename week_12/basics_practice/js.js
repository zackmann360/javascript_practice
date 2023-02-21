// -------------------------------------------
// first
// -------------------------------------------
var first = document.querySelector('.first')
var button = first.querySelector('button')
button.onclick = onclickButton


var index = 0
function onclickButton(){
    index = index + 1

    
    console.log(index)
    if(index > 3){
        index = 0
    }
    first.querySelector('.border').classList.remove('border')
    var items = first.querySelector('.item' + index)
    console.log(items)
    items.classList.add('border')

}

// -------------------------------------------
// second
// -------------------------------------------

var second = document.querySelector('.second')
var right = second.querySelector('.right')
right.onclick = onclickRight
var left = second.querySelector('.left')
left.onclick = onclickLeft
var up = second.querySelector('.up')
up.onclick = onclickUp
var down = second.querySelector('.down')
down.onclick = onclickDown

var x = 0
var y = 0
function onclickRight(){
    y = y + 1
    if(y > 2){
        y = 0
    }
    second.querySelector('.border').classList.remove('border')
    second.querySelector('.grid'+ x + '-' + y).classList.add('border')
}

function onclickLeft(){
    y = y - 1
    if(y < 0){
        y = 2
    }
    second.querySelector('.border').classList.remove('border')
    second.querySelector('.grid'+ x + '-' + y).classList.add('border')
}

function onclickUp(){
    x = x - 1
    if(x < 0){
        x = 2
    }
    second.querySelector('.border').classList.remove('border')
    second.querySelector('.grid'+ x + '-' + y).classList.add('border')
}

function onclickDown(){
    x = x + 1
    if(x > 2){
        x = 0
    }
    second.querySelector('.border').classList.remove('border')
    second.querySelector('.grid'+ x + '-' + y).classList.add('border')
}
// -------------------------------------------
// third
// -------------------------------------------

var third = document.querySelector('.third')
var left = third.querySelector('.leftButton')
left.onclick = onclickLeft
var right = third.querySelector('.rightButton')
right.onclick = onclickRight

x = 1
function onclickLeft(){
    // console.log(this)
    x -= 1
    if(x < 1){
        x = 3
    }
    console.log(x)
    third.querySelector('.show').classList.remove('show')
    var imageLeft = third.querySelector('.img' + x)
    imageLeft.classList.add('show')
    console.log(imageLeft)
}

function onclickRight(){
    // console.log(this)
    x += 1
    if(x > 3){
        x = 1
    }
    console.log(x)
    third.querySelector('.show').classList.remove('show')
    var imageLeft = third.querySelector('.img' + x)
    imageLeft.classList.add('show')
    console.log(imageLeft)
}