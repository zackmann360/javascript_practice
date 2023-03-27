var app = document.querySelector('.app')
var addButton = document.querySelector('#add')
addButton.onclick = onclickAdd


var myList = [
    {
        text: "shower",
        done: false
    },
    {
        text: "wash cloths",
        done: false
    }
]
function onclickAdd(){
    var input = app.querySelector('#addToList')
    
    // add input Value to myList task
    myList.push(
        {
        text: input.value,
        done: false
    }
    )
    
    input.value = ''
    render()
}

function render(){
    var i = 0
    // clear
    var tasks = document.querySelector('.tasks') 
    tasks.innerHTML = ''
    // create
    for(var item of myList){        

        var newTask = document.createElement('div')
        newTask.innerHTML = `
        <div class="task">
        <div class="text">${item.text}
        </div>
        <button index="${i}" id="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `



        
        i += 1
        if(item.done === true){
            var task = newTask.querySelector('.task')
            task.classList.add('done')
        }
        tasks.append(newTask)
        var deletebutton = newTask.querySelector('#delete')
        deletebutton.onclick = onclickDelete

        function onclickDelete() {
            var indexAtt = Number(this.getAttribute('index'))    
            console.log(this)
            console.log(indexAtt)
            myList[indexAtt].done = true
                        
            render()
        }  
    }
    
   

   
}
render()