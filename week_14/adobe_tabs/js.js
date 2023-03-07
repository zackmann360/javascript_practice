var app = document.querySelector('.app')
var tabs = app.querySelectorAll('.tab')

for(var tab of tabs){
    tab.onclick = onclickTab
}

function onclickTab(){
    console.log(this)
    var currentTab = app.querySelector('.border')
    currentTab.classList.remove('border')
    this.classList.add('border')

    var currentTab = app.querySelector('.show')
    currentTab.classList.remove('show')
    var tabNum = this.getAttribute('tabNum')
    document.querySelector("#" + tabNum).classList.add('show')
}
