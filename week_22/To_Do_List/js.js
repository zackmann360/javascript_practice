var app = document.querySelector(".app")
// create an array for your items
var yourArray = ["clean litter", "clean dishes"]

// select the input
var input = document.querySelector("input")
// select the add button
var add = document.querySelector("#add")
add.addEventListener("click", function() {
   console.log(input.value)
   // push the input value to yourArray
   yourArray.push(input.value)
   input.value = ""
   render()
})


// create a render function
function render() {
   // set an index
   var i = 0
   // clear 
   var currentList = document.querySelector('ul')
   currentList.innerHTML = ""
   // create
   for(var item of yourArray){
      // create a new li
      var newList = document.createElement('li')
      // set innerHTML to yourArray
      newList.innerHTML = `
            <li class="item">
               <p>${item}</p>
               <button index="${i}" id="delete">Delete</button>
            </li>
      `
      // append the newList to the current list
      currentList.append(newList)

      // add 1 to i / index
      i += 1

      // select the delete button
      var deleteBtn = newList.querySelector('#delete')
      console.log(deleteBtn)
      deleteBtn.addEventListener('click', function() {
         console.log(this)
         // select the index of the button as a number
         var selectedIndex = Number(this.getAttribute("index"))
         console.log(selectedIndex)
         yourArray.splice(selectedIndex, 1)
         render()
      })
   }
}
render()