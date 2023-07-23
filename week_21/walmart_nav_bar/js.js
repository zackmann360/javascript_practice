var app = document.querySelector(".app")
var linksArray = app.querySelectorAll(".link")
console.log(linksArray)

for(var link of linksArray){
   link.onclick = onclickLink
}

function onclickLink() {
   var active = app.querySelector(".active")
   active.classList.remove("active")
   // add active to the selected link
   this.classList.add("active")
}


