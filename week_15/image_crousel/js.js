var app = document.querySelector('.app')
var left = app.querySelector('.left')
left.onclick = onclickLeft
var right = app.querySelector('.right')
right.onclick = onclickRight
var slider = app.querySelector('.slider')

var pageNum = 1

function onclickLeft(){
    pageNum -= 1
    if(pageNum < 1){
        pageNum = 1
    }
    slider.classList.remove('showSlide1')
    slider.classList.remove('showSlide2')
    slider.classList.remove('showSlide3')
    console.log(slider)
    slider.classList.add('showSlide' + pageNum)
    var currentDot = app.querySelector('.showDot')
    console.log(currentDot)
    currentDot.classList.remove('showDot')
    var nextDot = app.querySelector('#dot' + pageNum)
    nextDot.classList.add('showDot')
    
}


function onclickRight(){
    pageNum += 1
    if(pageNum > 3){
        pageNum = 3
    }
    console.log(pageNum)
    //show the next slide
    slider.classList.remove('showSlide1')
    slider.classList.remove('showSlide2')
    slider.classList.remove('showSlide3')
    slider.classList.add('showSlide' + pageNum)
    console.log(slider)
    var currentDot = app.querySelector('.showDot')
    console.log(currentDot)
    currentDot.classList.remove('showDot')
    var nextDot = app.querySelector('#dot' + pageNum)
    nextDot.classList.add('showDot')

}