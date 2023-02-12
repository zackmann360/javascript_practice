var buttons = document.querySelectorAll('button')

var right = document.querySelector('.right')
console.log(right)

var text = document.querySelectorAll('.text')
console.log(text)

for(var item of buttons){
    console.log(item)
    item.onclick = onclickLink  
}
function onclickLink(){
    var text = this.querySelector('.text')
    console.log(text.innerHTML)
    right.innerHTML = text.innerHTML
}





