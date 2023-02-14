// what state is it in
// its in the index of 0
var index = 0

// click on right button index goes up by one
    // if the index goes to 5 then return to 0
    // render the page

// click on the left button index goes down by one 
    // if the index is less than 0 go to index 5
    // render the page

// render
    // get all he iimages queryselectorAll 
    // loop over the array
    // 
function render() {
    var gallery = document.querySelector('#gallery-final')
    var slides = gallery.querySelectorAll('.slide')
    console.log(slides)
    
    var currentSlide = slides[index]
    var img = currentSlide.querySelector('img')
    var imcSrc = img.src
}

render()



















// var productBox = document.querySelectorAll('.productBox')

// console.log(productBox)

// for(var item of productBox){
//     // item.classList.toggle('active')
//     item.onclick = onclickActive

//     function onclickActive(){
//         // console.log('test')
//         this.classList.toggle('active')
        
//     }
// }
