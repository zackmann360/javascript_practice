var app = document.querySelector('.app')
var tabs = app.querySelectorAll('.actionGroup')
var highlight = app.querySelector('.highlight')

for(var tab of tabs){
    tab.onclick = onclickTab
}

var left = 12
function onclickTab(){
    var currentHighlight = app.querySelector('.active')
    currentHighlight.classList.remove('active')
    this.classList.add('active')
    
    var currentTitle = app.querySelector('.show')
    currentTitle.classList.remove('show')
    
    var titleAtt = this.getAttribute('boxTitle')
    var newTitle = app.querySelector('.' + titleAtt)
    newTitle.classList.add('show')
    console.log(newTitle)
    console.log(titleAtt)
    
    var selectedNum = this.getAttribute('num')
    highlight.style.left = selectedNum * left + 'rem'



}