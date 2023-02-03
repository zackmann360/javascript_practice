// console.log("hello")

var template = document.querySelector('template')
// console.log(template)
// console.log(clone)


var loopTime = 50

for(var i = 0; i < loopTime; i += 1){
    // console.log(i)
    var clone = template.content.cloneNode(true)
    var container = document.querySelector('.app')
    container.append(clone)

}