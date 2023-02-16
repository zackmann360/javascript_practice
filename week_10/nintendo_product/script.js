var app = document.querySelector('.app')
var index = 0

var gallery = document.querySelector('.gallery')
var mainImage = gallery.querySelector('.slide')
var images = gallery.querySelectorAll('.item')

var leftButton = document.querySelector('.prev')
leftButton.onclick = onclickLeft

var rightButton = document.querySelector('.next')
rightButton.onclick = onclickRight


for (var item of images) {
    item.onclick = onclickClicked
}

function onclickClicked() {
    var imageNum = Number(this.getAttribute('num'))

    console.log(imageNum)
    index = imageNum
    render()
}

function onclickLeft() {
    console.log(this)
    index = Math.max(0, index - 1)

    render()
}

function onclickRight() {
    index = Math.min(5, index + 1)

    render()
}


function render() {

    var currentImage = gallery.querySelector('.active')
    currentImage.classList.remove('active')
    var newSelectedImage = images[index]
    newSelectedImage.classList.add('active')
    var newSelectedImagesrc = newSelectedImage.querySelector('img')

    var mainImageSrc = mainImage.querySelector('img')
    mainImageSrc.src = newSelectedImagesrc.src

}


var productBox = app.querySelectorAll('.productBox')

console.log(productBox)

for (var item of productBox) {
    item.onclick = onclickActive

    function onclickActive() {
        this.classList.toggle('active')

    }
}
