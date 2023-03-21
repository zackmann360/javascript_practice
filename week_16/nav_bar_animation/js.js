var right = document.querySelector('.right')
var rightItems = right.querySelectorAll('.item')
var highlight = document.querySelector('.highlight')
var borderRadius = document.querySelector('input')
borderRadius.oninput = oninputBorder
var navBar = document.querySelector('.navBar')
console.log(navBar)

function oninputBorder(){
    var borderRadiusValue = this.value
    navBar.setAttribute('style', '--border-radius:' + borderRadiusValue + 'rem')    
}



for(var item of rightItems){
    item.onclick = onclickRight

}

function onclickRight(){
    console.log(this)
    var active = document.querySelector('.active')
    active.classList.remove('active')
    this.classList.add('active')

    var width = this.offsetWidth
    var leftPosition = this.offsetLeft

    highlight.style.width = width + 'px'
    highlight.style.left = leftPosition + 'px'
}