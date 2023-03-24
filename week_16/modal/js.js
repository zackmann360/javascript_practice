// modal toggle
var togglesModal = document.querySelectorAll('.togglesModal')
console.log(togglesModal)
for (var toggle of togglesModal) {
    toggle.onclick = onclickToggle
}
function onclickToggle() {
    var modalId = this.getAttribute('modalid')
    var modal = document.querySelector("#" + modalId)
    modal.classList.toggle('show')
}

// app code

var app = document.querySelector('.app')
var overlay = app.querySelector('.overlay')
overlay.onclick = onclickOverlay
var appModal = app.querySelector('#appModal')
var submitModal = app.querySelector('#submited')
var inputGroupName = app.querySelector('#name')
var inputName = inputGroupName.querySelector('input')
var inputGroupDescription = app.querySelector('#description')
var inputDescription = inputGroupDescription.querySelector('input')
var projects = app.querySelector('.projects')

function onclickOverlay() {
    console.log(this)
    appModal.classList.remove('show')
}
// 2. add onclikc to submit button
var submitBtn = app.querySelector('#submitBtn')
submitBtn.onclick = onclickSubmit

function onclickSubmit() {
    // erros
    inputGroupDescription.classList.toggle('error', !inputDescription.value.length)
    inputGroupName.classList.toggle('error', !inputName.value.length)

    // stuff
    var name = inputName.value
    var desc = inputDescription.value
    console.log(name, desc)


    if (name && desc) {
        // current.classList.remove('triggered')
        // app.classList.add('submited')
        appModal.classList.remove('show')
        submitModal.classList.add('show')
            // add a project
        projects.innerHTML += `
            <div class="project">
            <div class="name">${name}</div>
            <div class="description">${desc}</div>
            </div>
        `
    }

    var projectName = app.querySelector('.projectName')
    var projectDesc = app.querySelector('.projectDescription')

    projectName.innerHTML = name
    projectDesc.innerHTML = desc



}

var returnBtn = app.querySelector('#returnBtn')
returnBtn.onclick = onclickReturn

function onclickReturn() {
    console.log('onclickReturn')
    submitModal.classList.remove('show')

    inputDescription.value = ''
    inputName.value = ''
}

// 3. remove error messages if it is typed into
inputDescription.onkeydown = onkeydownDescr
inputName.onkeydown = onkeydownName

function onkeydownDescr() {
    console.log('description')
    if (inputDescription.value) {
        inputGroupDescription.classList.remove('error')
    }
}

function onkeydownName() {
    if (inputName.value) {
        inputGroupName.classList.remove('error')
    }
}