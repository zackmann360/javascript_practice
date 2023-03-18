var app = document.querySelector('.app')
app.querySelector('.left').onclick = onclickLeft
app.querySelector('.right').onclick = onclickRight
var slides = app.querySelector('.slides')
var dots = app.querySelector('.dots')

var position = 0
function onclickRight(){
    position += 1
    if(position > 2){
        position = 2
    }
    slides.style.left = -100 * position + '%'
    moveDot()
}


function onclickLeft(){
    position -= 1
    if(position < 0){
        position = 0
    }
    console.log(position)
    slides.style.left = -100 * position + '%'
    moveDot()
}

function moveDot(){
     // get the current dot
     var currentDot = app.querySelector('.solid')
     currentDot.classList.remove('solid')
     // set the next dot
     var nextDot = app.querySelector("#dot" + position)
     nextDot.classList.add('solid')
     console.log(nextDot)
}














































































// var app = document.querySelector('.app')
// var left = app.querySelector('.left')
// left.onclick = onclickLeft
// var right = app.querySelector('.right')
// right.onclick = onclickRight
// var slider = app.querySelector('.slider')

// var pageNum = 1

// function onclickLeft(){
//     pageNum -= 1
//     if(pageNum < 1){
//         pageNum = 1
//     }
//     slider.classList.remove('showSlide1')
//     slider.classList.remove('showSlide2')
//     slider.classList.remove('showSlide3')
//     console.log(slider)
//     slider.classList.add('showSlide' + pageNum)
//     var currentDot = app.querySelector('.showDot')
//     console.log(currentDot)
//     currentDot.classList.remove('showDot')
//     var nextDot = app.querySelector('#dot' + pageNum)
//     nextDot.classList.add('showDot')
    
// }


// function onclickRight(){
//     pageNum += 1
//     if(pageNum > 3){
//         pageNum = 3
//     }
//     console.log(pageNum)
//     //show the next slide
//     slider.classList.remove('showSlide1')
//     slider.classList.remove('showSlide2')
//     slider.classList.remove('showSlide3')
//     slider.classList.add('showSlide' + pageNum)
//     console.log(slider)
//     var currentDot = app.querySelector('.showDot')
//     console.log(currentDot)
//     currentDot.classList.remove('showDot')
//     var nextDot = app.querySelector('#dot' + pageNum)
//     nextDot.classList.add('showDot')

// }