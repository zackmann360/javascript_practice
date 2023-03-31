var app = document.querySelector('.app')
var modal = app.querySelector('.modalOverlay')
// buttons
var addNew = app.querySelector('#addNew')
addNew.onclick = onclickAddNew
var cancelBtn = app.querySelector('#cancel')
cancelBtn.onclick = onclickCancel
//----------input fields
// card number
var inputGroupCardNum = app.querySelector('#inputGroupCardNum')
var inputCardNum = inputGroupCardNum.querySelector('input')
// card date
var inputGroupCardDate = app.querySelector('#inputGroupCardDate')
var inputCardDate = inputGroupCardDate.querySelector('input')
console.log(inputCardDate)

var myCards = [
   {
      icon : "../../images/icons/icon_amex.png",
      number : "1234567890123456",
      expire : "11/23",
   },
   {
      icon : "../../images/icons/icon_visa.png",
      number : "1234567890123456",
      expire : "11/23",
   },
   {
      icon : "../../images/icons/icon_bitcoin.png",
      number : "1234567890123456",
      expire : "11/23",
   }
]

function onclickCancel(){
   modal.classList.add('hide')
}

function onclickAddNew(){
   modal.classList.remove('hide')
   console.log(inputCardNum.value)

}

function render(){
   // clear
   var oldCards = document.querySelector('.cards')
   oldCards.innerHTML = ''
   // create
   for(var card of myCards){
      var lastFourDigits = card.number.slice(-4)
      var maskedCardNumber = "**** **** **** " + lastFourDigits


      var newCards = document.createElement('div')
      newCards.innerHTML = `
      <div class="card m-t-1">
               <div class="left">
                  <div class="icon">
                     <img src="${card.icon}" alt="">
                  </div>
                  <div class="text">
                     <div class="cardNum">${maskedCardNumber}</div>
                     <p class="darker">Expiration</p>

                  </div>
               </div>
               <div class="right">
                  <div class="buttons">
                     <button class="edit">
                        <i class="fa-sharp fa-regular fa-pen-to-square"></i>
                        edit
                     </button>
                     <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                        delete
                     </button>
                  </div>
               </div>
            </div>
      `
      oldCards.append(newCards)
   }

}

render()