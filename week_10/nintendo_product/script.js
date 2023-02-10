var breadCrumb = document.querySelectorAll('.text')
console.log(breadCrumb)

for(var text of breadCrumb){
    // console.log(text)
    text.onclick = selected

    function selected(){
        // console.log(this)
        this.classList.toggle('selected')
    }
}




 