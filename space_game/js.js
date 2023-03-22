window.onkeydown = onkeydownbody
window.onkeyup = onkeyupBody
var player = document.querySelector('.player')
var x = window.innerWidth / 2
var y = window.innerHeight / 2
var jets = false
var turningLeft = false
var turningRight = false
var shooting = false
var rotation = 0
var speed = 5
var bulletSpeed = 15
var turnSpeed = 0.1
var bullets = []
var shootTimer = 0
var shootDelay = 200




function onkeyupBody(event) {
    if (event.key == 'ArrowUp') {
        jets = false
    }
    if (event.key == "ArrowLeft") {
        turningLeft = false
    }
    if (event.key == "ArrowRight") {
        turningRight = false
    }
    if (event.key == ' ') {
        shooting = false
    }
}

function onkeydownbody(event) {
    if (event.key == 'ArrowUp') {
        jets = true
    }
    if (event.key == 'ArrowLeft') {
        turningLeft = true
    }
    if (event.key == 'ArrowRight') {
        turningRight = true
    }
    if (event.key == ' ') {
        shooting = true
    }
}

update()

function fire() {
    if (Date.now() - shootTimer > shootDelay) {
        console.log('can shoot')
        shootTimer = Date.now()

        var elementBullet = document.createElement('div')
        elementBullet.classList.add("bullet")
        var xStart = x + Math.sin(rotation) * 75
        var yStart = y - Math.cos(rotation) * 75
        elementBullet.style.top = yStart
        elementBullet.style.left = xStart
        elementBullet.style.transform = `translate(-50%, -50%) rotate(${rotation}rad)`
        var image = document.createElement('img')
        image.src = './bullet.gif'
        elementBullet.append(image)
        document.body.append(elementBullet)
        console.log('fire')
        bullets.push({
            x: xStart,
            y: yStart,
            rotation: rotation,
            element: elementBullet
        })
    }

}

function update() {
    setTimeout(update, 1000 / 60)

    for (var bullet of bullets) {

        var xMove = Math.sin(bullet.rotation) * bulletSpeed
        var yMove = Math.cos(bullet.rotation) * bulletSpeed
        bullet.x += xMove
        bullet.y -= yMove

        // console.log(bullet)
        bullet.element.style.top = bullet.y + 'px'
        bullet.element.style.left = bullet.x + 'px'
        bullet.element.style.transform = `translate(-50%, -50%) rotate(${bullet.rotation}rad)`

    }

    if (shooting) {
        fire()
    }

    if (jets) {
        // move 
        var xMove = Math.sin(rotation) * speed
        var yMove = Math.cos(rotation) * speed
        y = y - yMove
        x = x + xMove
    }
    if (turningLeft) {
        rotation -= turnSpeed
    }
    if (turningRight) {
        rotation += turnSpeed
    }


    player.style.left = x + 'px'
    player.style.top = y + 'px'
    player.style.transform = `translate(-50%, -50%) rotate(${rotation}rad)`
    player.classList.toggle('animated', jets)
}

