var app = document.querySelector('.app')

window.onscroll = function(){
    var prevScrollPos = window.pageYOffset
    window.onscroll = function(){
        var currentScrollPos = window.pageYOffset
        if(prevScrollPos > currentScrollPos){
        app.style.top = '0'
        }else {
            app.style.top = '-8rem'
        }
    }
    prevScrollPos = currentScrollPos
}
