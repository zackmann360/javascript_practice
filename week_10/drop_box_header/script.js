// select the menuButotn
var menu = document.querySelector('.menuButton')
// console.log(menu)
// set an onclikc for menu
menu.onclick = onclickMenu

function onclickMenu(){
    this.classList.toggle('isOpened')
    // console.log('yeeee haaaaawwwww')
    // add show class to drop down
    var dropDown = document.querySelector('.dropDown')
    // console.log(dropDown)
    dropDown.classList.toggle('show')

}
