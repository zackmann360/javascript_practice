var app = document.querySelector(".app")
//-------------------------------------
// inputGroups
//-------------------------------------
var inputGroupEmail = app.querySelector("#email")
var emailInput = inputGroupEmail.querySelector("input")
var inputGroupPassword = app.querySelector("#password")
var passwordInput = inputGroupPassword.querySelector("input")
//-------------------------------------
// button
//-------------------------------------
var login = app.querySelector("button")


//-------------------------------------
// functions
//-------------------------------------
login.addEventListener("click", function() {
   console.log(this)
   console.log(inputGroupEmail)
   if (!emailInput.value){
      inputGroupEmail.classList.add("error")
   }
   if (!passwordInput.value) {
      inputGroupPassword.classList.add("error")
   }
   if (emailInput.value && passwordInput.value === "admin") {
      console.log("yes")
   }
})

emailInput.addEventListener("keydown", function() {
   inputGroupEmail.classList.remove("error")
})

passwordInput.addEventListener("keydown", function() {
   inputGroupPassword.classList.remove("error")
})

