var app = document.querySelector('.app')
var rows = app.querySelectorAll('.accordian')
// console.log(app, bar)

for(var row of rows){
    row.onclick = onclickRow
}

function onclickRow(){
    this.classList.toggle('active')
}
