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
    var gallery = document.querySelector('.gallery')
    var mainImage = gallery.querySelector('.slide')
    // console.log(mainImage)
    // get all he images
    var images = gallery.querySelectorAll('.item')

    var leftButton = document.querySelector('.prev')
    // console.log(leftButton)
    leftButton.onclick = onclickLeft

    var rightButton = document.querySelector('.next')
    // console.log(rightButton)
    rightButton.onclick = onclickRight

    // loop over the images
    
    for(var item of images){
        item.onclick = onclickClicked
    }

    function onclickClicked(){
        // console.log(this)
        var imageNum = Number(this.getAttribute('num'))
            
        console.log(imageNum)
        index = imageNum 
        // console.log(imageNum)
        render()
    }

    function onclickLeft(){
        console.log(this)
        index = Math.max(0, index - 1)
        
        render()
    }

    function onclickRight(){
        index = Math.min(5, index + 1)

        render()
    }

    // render the page
    function render(){
        
        // get the selected image src
        var currentImage = gallery.querySelector('.active')
        currentImage.classList.remove('active')
        var newSelectedImage = images[index]
        newSelectedImage.classList.add('active')
        var newSelectedImagesrc = newSelectedImage.querySelector('img')
        console.log(newSelectedImagesrc.src)

        var mainImageSrc = mainImage.querySelector('img')
        mainImageSrc.src = newSelectedImagesrc.src

    }
    // render()
        



















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

// console.log(item)
// var src = item.querySelector('img')
// console.log(src.src)
