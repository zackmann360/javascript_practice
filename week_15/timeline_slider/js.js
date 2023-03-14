var app = document.querySelector('.app')
var actionGroups = app.querySelectorAll('.actionGroup')
var highlight = app.querySelector('.highlight')
var items = app.querySelectorAll('.item')


for(var item of items){
    item.onclick = onclickItem
}

function onclickItem(){
    var pageTitle = this.getAttribute('actionPage')
    console.log(pageTitle)
    var selectedPage = app.querySelector('.' + pageTitle)
    console.log(selectedPage)
    var currentPage = app.querySelector('.showTitle')
    currentPage.classList.remove('showTitle')
    selectedPage.classList.add('showTitle')
}


for(var actionGroup of actionGroups){
    actionGroup.onclick = onclickActionGroup
}

var currentPosition = 12

function onclickActionGroup(){
    var num = this.getAttribute('num')
    var newPossition = currentPosition * num
    highlight.style.left = newPossition + "rem"
    var currentHighlight = app.querySelector('.iconHighlight')
    currentHighlight.classList.remove('iconHighlight')
    this.classList.add('iconHighlight')

}