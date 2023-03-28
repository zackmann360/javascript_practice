var app = document.querySelector('.app')
var addBtn = app.querySelector('#add').onclick = onclickAdd

function onclickAdd(){
   var input = app.querySelector('input')
   myList.push(
      {
         text: input.value,
         done: false
      }
   ) 
   input.value = ''
   render()
}

var myList = [
   {
      text: "things to do today",
      done: true
   },
   {
      text: "play on the computer",
      done: false
   }
]

function render(){
   var i = 0
   // clear 
   var tasks = app.querySelector('.tasks')
   tasks.innerHTML = ''
   // create 
   // first loop over the array
   for(var item of myList){
      // create a new div item
      var newDiv = document.createElement('div')
      newDiv.innerHTML = `
      <div class="task">
         <div class="text">
            ${item.text}
         </div>
         <button index="${i}">
              <i class="fa-solid fa-trash-can"></i>
         </button>
      </div>
      `
      tasks.append(newDiv)
      i++ 
      if(item.done === true){
         var task = newDiv.querySelector('.task')
         task.classList.add('done')
      }
      var deleteBtn = newDiv.querySelector('button').onclick = onclickDelete
      function onclickDelete(){
         console.log(this)
         var indexAtt = Number(this.getAttribute('index'))
         console.log(indexAtt)
         myList[indexAtt].done = true
         render()
      }
   }
}
render()
