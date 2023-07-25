var app = document.querySelector(".app")
//------ add btn---------
var add = document.querySelector("#add")
//-------array----------
var yourArray = ["clean your room", "cook diner"]

add.addEventListener("click", function () {
   // get the input value when clicking add
   var input = document.querySelector("input")
   // push input value to yourArray
   yourArray.push(input.value)
   // clear input after clicking add
   input.value = ""
   render()
})

function render() {
   // create an index number
   var i = 0
   // clear 
   var currentItems = document.querySelector("ul")
   currentItems.innerHTML = ""
   // create
   for (var items of yourArray) {
      // new list item
      var newItem = document.createElement("li")
      newItem.innerHTML =
         `
            <div class="left">
               <p>${items}</p>
            </div>
            <div class="right">
               <button indexDel=${i} id="delete">Delete</button>
            </div>
         `
         i += 1
         currentItems.append(newItem)

         var del = newItem.querySelector("#delete")
         del.addEventListener("click", function() {
            // get the index att of delete as a number
            var indexAtt = Number(this.getAttribute("indexDel"))
            // delete item from yourArray from the indexAtt
            yourArray.splice(indexAtt, 1)
            render()
         })

   }
}
render()