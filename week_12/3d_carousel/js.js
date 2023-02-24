var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var cells = document.querySelectorAll('.carousel .cell')

tan = function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180)
}

angle = 360/cells.length
n = 0
r = Math.round(160/tan(18))
carousel = document.querySelector('.carousel')
carousel.style.transform = 'translateZ('+ -r +"px)"

function rotateCells(){
    cells.forEach( cell => {
        cell.style.transform = "rotateY(" + n + "deg) translateZ("+ r +"px)"
        n += angle
    })
}
rotateCells()

function rotateCarousel(n){
    carousel.style.transform = "translateZ("+-r+"px) rotateY("+ n + "deg)"
}
rotateCarousel(n)

next.addEventListener("click", e =>{
    n -= angle
    rotateCarousel(n)
})
prev.addEventListener("click", e =>{
    n += angle
    rotateCarousel(n)
})

