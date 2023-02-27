window.onscroll = onscrollWindow

function onscrollWindow(){
    var y = window.scrollY
    var heightOfPage = document.body.scrollHeight
    var viewBox = window.innerHeight
    var maxHeight = heightOfPage - viewBox
    var percent = y / maxHeight
    var percentRounded = Math.round(percent * 100)
    console.log(percentRounded)
    h1.innerHTML = percentRounded + '%'
}