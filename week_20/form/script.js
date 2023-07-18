// -----------------------input-------------------------
var emailInputGroup = document.querySelector("#emailIn")
var passInputGroup = document.querySelector("#passIn")
var firstNameInputGroup = document.querySelector("#fNameIn")
var lastNameInputGroup = document.querySelector("#lNameIn")
var firstNameInput = firstNameInputGroup.querySelector('input')
var lastNameInput = lastNameInputGroup.querySelector("input")
var emailInput = document.querySelctor("input")
var passInput = document.querySelctor("input")
// -----------------------buttons-------------------------
var signUpButton = document.querySelector(".left")
var loginButton = document.querySelector(".right")
var getStartedButton = document.querySelector(".primary")

signUpButton.addEventListener("click", function() {
   console.log(this)
})

loginButton.addEventListener("click", function(){
   console.log(this)
})

getStartedButton.addEventListener("click", function(){
   console.log(this)
   console.log(lastNameInput)
   if(!firstNameInput.value){
      firstNameInputGroup.classList.add("error")
   }
   if(!lastNameInput.value){
      lastNameInputGroup.classList.add("error")
   }
   // if(!emailInput.value){
   //    lastNameInputGroup.classList.add("error")
   // }
   // if(!passInput.value){
   //    lastNameInputGroup.classList.add("error")
   // }

})

