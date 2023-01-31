// select the template
var template = document.querySelector(".myTemplate")
console.log(clone)

// var container = document.querySelector('.cloned')
// console.log(container)
// container.append(clone)

// loop 12 times
var loopTime = 12
for(var i=0; i < loopTime; i += 1){
    // console.log(i)
    var clone = template.content.cloneNode(true)
    var randomWidth = Math.round(100 + Math.random() * 200)
    console.log(randomWidth)
    clone.querySelector('.item img').src = "https://placekitten.com/" + randomWidth 
    var container = document.querySelector('.cloned')
    // console.log(container)
    container.append(clone)

}