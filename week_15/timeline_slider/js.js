var app = document.querySelector('.app')
var selection = app.querySelectorAll('.actionGroup')
var highlight = app.querySelector('.highlight')

for(var selected of selection){
    selected.onclick = onclickSelected
}

var width = 12
function onclickSelected(){
    var currentActive = app.querySelector('.active')
    currentActive.classList.remove('active')
    this.classList.add('active')
    
    var number = this.getAttribute('number')
    var newPostion = number * width
    highlight.style.left = newPostion + 'rem'
    
    var currentTitle = app.querySelector('.showTitle')
    var pageTitle = this.getAttribute('pageTitle')
    var nextTitle = app.querySelector('.' + pageTitle)
    currentTitle.classList.remove('showTitle')
    nextTitle.classList.add('showTitle')
}
