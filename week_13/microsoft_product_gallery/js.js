var app = document.querySelector('.app')
var dropDowns = app.querySelectorAll('.dropDown')

for (var drop of dropDowns) {
    // console.log(drop)
    drop.onclick = onclickDrop
}

function onclickDrop() {
    // select the active dropDown
    // console.log(this)
    var active = app.querySelector('.dropDown.active')
    // console.log(active)
    if (active) {
        active.classList.remove('active')
    }
    this.classList.add('active')

    // read whatimage attribute
    var attribute = this.getAttribute('whatImageTooShow')
    console.log(attribute)

    // get the shown image
    var shownImg = app.querySelector('.show')
    // console.log(shownImg)

    shownImg.classList.remove('show')

    // add show to the next image
    var nextImg = app.querySelector("." + attribute)
    // console.log(nextImg)

    nextImg.classList.add('show')
}

