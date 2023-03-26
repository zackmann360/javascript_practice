document.querySelector('#add').onclick = onclickAdd
var myList = ['Feed cats', 'Take dog outside']



function onclickAdd(){
    var input = document.querySelector('input')
    if(input.value.length){
        myList.push(input.value)
    }
    input.value = ''
    render()
}

function render(){
    var i = 0
    // clear
    var currentList = document.querySelector('.items')
    currentList.innerHTML = ''
    // create a new list myList
    for(var list of myList){
        // new list div
        var newList = document.createElement('div')
        newList.innerHTML = `
            <div class="item"> 
            <div class="text">${list}</div>
            <button index="${i}" id="remove">
                <i class="fa-solid fa-trash"></i>
            </button>
            </div>
        `
        i += 1
        currentList.append(newList)
        var removeBtn = newList.querySelector('#remove')
        removeBtn.onclick = onclickRemove

        function onclickRemove(){
            var indexAtt = Number(this.getAttribute('index'))
            myList.splice(indexAtt, 1)
            render()
        }
        
    } 
}
render()