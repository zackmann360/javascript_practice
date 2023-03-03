var app = document.querySelector('.app')
var tabs = app.querySelectorAll('.linkBtn')

for(var tab of tabs){
    // console.log(tab)
    tab.onclick = onclickTab
}

function onclickTab(){
    debugger
    // get the currently active button
    var currentActive = app.querySelector('.active')
    // console.log(currentActive)
    // remove active from the currently selected
    currentActive.classList.remove('active')
    // add active to this
    this.classList.add('active')


    // get the currently selected tab
    var currentTab = app.querySelector('.show')
    // console.log(currentTab)
    // remove show from current
    currentTab.classList.remove('show')

    // get the page i clicked on
    var selectedPage = this.getAttribute("ThisIsThePageIselected")
    // var selectedPage = "page1"
    console.log(selectedPage)

    // 
    var page2 = document.querySelector("." + selectedPage)
    page2.classList.add('show')




    

}