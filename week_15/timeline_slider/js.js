var app = document.querySelector('.app')
var highlight = app.querySelector('.highlight')
var selected = app.querySelectorAll('.item')
var dots = app.querySelectorAll('#dot')
var width = 8
var iconGroups = app.querySelectorAll('.iconGroup')

for(var iconGroup of iconGroups){
    iconGroup.onclick = onclickIconGroup
}

function onclickIconGroup(){
    var currentDot = app.querySelector('.selected')
    currentDot.classList.remove('selected')
    this.classList.add('selected')
  
}


for(var select of selected){
    select.onclick = onclickSelected
}

function onclickSelected(){
    var attribute = this.getAttribute('num')

    var position = attribute * width
    highlight.style.left = position + 1.8 + 'rem' 

    var pageAtt = this.getAttribute('pageTitle')

    var currentPage = app.querySelector('.show')
    
    currentPage.classList.remove('show')

    var selectedPage = app.querySelector('.' + pageAtt)
    selectedPage.classList.add('show')

    
}


