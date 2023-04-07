var app = document.querySelector('.app')
var items = app.querySelectorAll('.item')

for(var item of items){
   console.log(item)
   item.onclick = onclickOpen
}

function onclickOpen() {
   this.classList.toggle('show')
}

