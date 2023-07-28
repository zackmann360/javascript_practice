var app = document.querySelector(".app")
// create an array for your items
var yourItems = ["clean room", "wash dishes"]
// select the input
var input = app.querySelector("input")
// select the add button
var addBtn = app.querySelector(".add")
// set a click eventListener for addBtn
addBtn.addEventListener("click", function() {
   // push input value to yourItems
   yourItems.push(input.value)
   // clear input value after clicking add
   input.value = ""
   render()
})

// create a render function
function render() {
   // set an index number
   var i = 0
   // clear 
   var currentItems = app.querySelector(".items")
   currentItems.innerHTML = ""
   // loop over youItems
   for(var item of yourItems){
      // create
      var newItems = document.createElement("li")
      newItems.innerHTML = `
      <p>${item}</p>
      <button index="${i}" class="delete">Delete</button>
      `
      // add one to i
      i+=1
      // append newItems to current Items
      currentItems.append(newItems)
      // select the delete button
      var dltBtn = newItems.querySelector(".delete")
      dltBtn.addEventListener("click", function() {
         // get the index att as a number
         var indexAtt = Number(this.getAttribute("index"))
         // splice your items 
         yourItems.splice(indexAtt, 1)
         render()
      })
   }
   
}
render()