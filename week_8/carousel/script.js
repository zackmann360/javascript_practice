// console.log('cats')

// how to do this
// right button
var leftButton = document.querySelector('.final .leftButton')
var rightButton = document.querySelector('.final .rightbutton')
// console.log(rightButton)

// data 
var position = 0

// program
rightButton.onclick = onclickRightButton
leftButton.onclick = onclickLeftButton

function onclickLeftButton(){
    console.log('cats')
    var oldPosition = position
    position -= 1
    console.log(position)
    if(position < 0){
        position = 0
    }
    var slides = document.querySelector('.final .slides')
    slides.classList.remove('move-' + oldPosition)
    slides.classList.add('move-' + position)

    if(position == 0){
        leftButton.classList.add('hide')
    }
    
}

function onclickRightButton(){
    // console.log('cars')
    var oldPosition = position
    position = position + 1
    if(position > 4){
        position = 4
    }
    // console.log(position)
    var slides = document.querySelector('.final .slides')
    slides.classList.remove('move-' + oldPosition)
    slides.classList.add('move-' + position)

    // show left 
    if(position > 0){
        leftButton.classList.remove('hide')
        console.log('is this working')
    }
   
}