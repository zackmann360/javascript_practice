var stars = document.querySelector('#stars')
var moon = document.querySelector('#moon')
var mountainsBehind = document.querySelector('#mountainsBehind')
var mountainsFront = document.querySelector('#mountainsFront')
var text = document.querySelector('#text')
var btn = document.querySelector('.btn')
var header = document.querySelector('header')
console.log(header)

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountainsBehind.style.top = value * 0.5 + 'px'
    mountainsFront.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.75 + 'px'
    header.style.top = value * 0.5 + 'px'
})