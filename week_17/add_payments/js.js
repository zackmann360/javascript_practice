











































































// var app = document.querySelector('.app')
// var modal = app.querySelector('.modal')

// // buttons
// var addBtn = app.querySelector('#addBtn')
// addBtn.onclick = onclickAdd
// var saveBtn = app.querySelector('#saveBtn')
// saveBtn.onclick = onclickSave
// var cancelBtn = app.querySelector('#cancelBtn')
// cancelBtn.onclick = onclickCancel

// // select the inputgroups
// var inputGroupCardNumber = app.querySelector('#inputGroupCardNumber')
// var inputCardNumber = inputGroupCardNumber.querySelector('input')
// var inputGroupCardExpire = app.querySelector('#inputGroupCardExpire')
// var inputCardExpire = inputGroupCardExpire.querySelector('input')
// var inputGroupCardType = app.querySelector('#inputGroupCardType')
// var inputCardType = inputGroupCardType.querySelector('select')



// var yourCards = [
//     {
//         cardNumber : "3333333333333333",
//         cardExpire : "2025-01",
//         cardType : "../../images/icons/icon_visa.png"
//     },
//     {
//         cardNumber : "4444444444444444",
//         cardExpire : "2023-02",
//         cardType : "../../images/icons/icon_bitcoin.png"
//     },
//     {
//         cardNumber : "5555555555555555",
//         cardExpire : "2027-04",
//         cardType : "../../images/icons/icon_amex.png"
//     }
// ]

// var cardThatImEditing = 0

// function onclickSave(){
//     modal.classList.add('hide')
//        // fill out the input fields 
//     yourCards[cardThatImEditing].cardNumber =  inputCardNumber.value 
//     yourCards[cardThatImEditing].cardExpire = inputCardExpire.value
//     yourCards[cardThatImEditing].cardType = inputCardType.value

//     render()
// }

// function onclickEdit(){
//     modal.classList.remove('hide')
//     var cardThatImEditing = this.getAttribute('index')
//     // fill out the input fields 
//     inputCardNumber.value = yourCards[cardThatImEditing].cardNumber
//     inputCardExpire.value = yourCards[cardThatImEditing].cardExpire
//     inputCardType.value = yourCards[cardThatImEditing].cardType

//     render()
// }

// function onclickDelete(){
//     var indexAtt = this.getAttribute('index')
//     yourCards.splice(indexAtt, 1)
//     render()
// }

// function onclickCancel(){
//     modal.classList.add('hide')

// }

// function onclickAdd(){
//     modal.classList.remove('hide')
// }
// function render(){
//     // clear 
//     var oldCards = app.querySelector('.cards')
//     oldCards.innerHTML = ''
//     //create 
//     var i = 0
//     for(var card of yourCards){
//         var lastFourDigits = card.cardNumber.slice(-4)
//         var maskedCardNumber = "**** **** **** " + lastFourDigits
        
        
//         var newCard = document.createElement('div')
//         newCard.innerHTML = `
//         <div class="card m-t-1">
//             <div class="left">
//             <div class="icon">
//                 <img src="${card.cardType}" alt="">
//             </div>
//             <div class="text">
//                 <div class="cardNum">${maskedCardNumber}</div>
//                 <div class="cardExpire">
//                     <p class="grey">Expiration ${card.cardExpire}</p>
//                     </div>
//             </div>
//             </div>
//             <div class="right">
//             <button index="${i}" id="editBtn">
//                 <i class="fa-regular fa-pen-to-square"></i>
//                 edit
//             </button>
//             <button index=${i} id="deleteBtn" class="red">
//                 <i class="fa-solid fa-trash"></i>
//                 Delete
//             </button>
//             </div>
//         </div>
        
//         `
//         i += 1
//         oldCards.append(newCard)

        
//         var deleteBtn = newCard.querySelector('#deleteBtn')
//         deleteBtn.onclick = onclickDelete
        
//         var editBtn = newCard.querySelector('#editBtn')
//         editBtn.onclick = onclickEdit
//     }

// }

// render()