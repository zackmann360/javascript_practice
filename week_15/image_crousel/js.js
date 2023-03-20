var slides = document.querySelector('.slides')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
left.onclick = onclickLeft
right.onclick = onclickRight
var dots = document.querySelector('.dots')

var position = 0

function onclickRight(){
    position += 1
    if(position > 2){
        position = 0
    }
    slides.style.left = position * -100 + '%'
    moveSolidDot()    
}

function onclickLeft(){
    position -= 1
    if(position < 0){
        position = 2
    }
    console.log(position)
    slides.style.left = position * -100 +  '%'
    moveSolidDot()
}
function moveSolidDot(){
    var currentDot = document.querySelector('.active')
    currentDot.classList.remove('active')
    var nextDot = document.querySelector('#dot' + position)
    nextDot.classList.add('active')
}