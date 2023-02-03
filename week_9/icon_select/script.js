// console.log('test')

// select the array of items
var items = document.querySelectorAll('.card')

// loop over items
for(var item of items){
    // console.log(item)
    // set an onclick for item
    item.onclick = shake
    
}

// create a single function
function shake(){
    // console.log(this, 'test')
    // select the curently pinned 
    var active = document.querySelector('.pined')
    // console.log(active)
    // remove pined
    active.classList.remove('pined')
    // add pined to this
    this.classList.add('pined')
    // remove pined after a set time

}



