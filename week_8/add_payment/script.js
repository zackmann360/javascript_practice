// console.log('cats')
var addPayment = document.querySelector(".addPayment")
// addPayment.onclick = onclickAdd

var myArray = [
    {
        icon: "../../images/icons/mastercard.png",
        expiration : "01/23"
    },
    {
        icon: "../../images/icons/visa.png",
        expiration : "07/15"
    }
    
    
]

// program
var addPayment = document.querySelector('.addPayment')
addPayment.onclick = onclickAdd

function onclickAdd(){
    
    var icon = "../../images/icons/bitcoin.png"
    var random = Math.random()
    if(random > 0.33){
        icon = "../../images/icons/mastercard.png"
    }
    if(random > 0.33 && random < 0.66 ){
        icon = "../../images/icons/amex.png"
    }
    

    myArray.push(
        {
            icon: icon,
            expiration: "01/27"
        }
    )

    render()
}

// select the template
var template = document.querySelector('.templateRow')

function render(){
    // clear
    var rowContainer = document.querySelector('.rows')
    rowContainer.innerHTML = ""
    // console.log(rowContainer)
    // create
    for(var item of myArray){
        console.log(item)
        var clone = template.content.cloneNode(true)
        // console.log(clone)
        var icon = clone.querySelector('.icon img')
        // console.log(icon)
        icon.src = item.icon
        // select the expiration
        var expiration = clone.querySelector('.expiration')
        expiration.innerHTML = item.expiration
        
        //append it
        rowContainer.append(clone)
    }
}
render()