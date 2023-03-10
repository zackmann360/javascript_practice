document.body.onkeydown = onkeydownbody
document.body.onkeyup = onkeyupbody
var player = document.querySelector('.player')

var rotate = 0
var positionX = 0
var positionY = 0

function onkeydownbody(event){

    if(event.key === 'ArrowUp'){
        player.classList.add('animated')
        move()
    }

    if(event.key === 'ArrowLeft'){
        rotate -= 0.25
        // console.log(rotate , `rotate(${rotate}rad)`)

        player.style.transform = `rotate(${rotate}rad)`

    }
    if(event.key === 'ArrowRight'){
        rotate += 0.25
        player.style.transform = `rotate(${rotate}rad)`
    }


}

function onkeyupbody(event){
    if(event.key === 'ArrowUp'){
        player.classList.remove('animated')
    }

}

function move(){
    
    // how do I get the ship to move the way it is pointed
    // sin returns a number between -1 and 1 
    // sin tells you the ammount of y that angle has
    // sin requires the angle to be in a radiant
    // a radiant is 360deg == pie * 2 
    var moveX = Math.sin(rotate) * 10
    var moveY = Math.cos(rotate) * 10
    
    positionX += moveX
    positionY -= moveY
    console.log(moveX, moveY)
    

    console.log(positionX + "px")
    player.style.position = "absolute"
    player.style.left = positionX + "px"
    player.style.top = positionY + "px"
}
