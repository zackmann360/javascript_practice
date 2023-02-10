var checkBoxes = document.querySelectorAll('.checkbox')
// console.log(checkBoxes)

//loop over them
for(var item of checkBoxes){
    // console.log(item)

    // set an onclick and make a function
    item.onclick = function(){
        this.classList.toggle('checked')
    }
}