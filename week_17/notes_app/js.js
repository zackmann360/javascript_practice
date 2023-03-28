var app = document.querySelector('.app')
app.querySelector('#create').onclick = onclickCreate
var modal = app.querySelector('.editor')
app.querySelector('#save').onclick = onclickSave
app.querySelector('#delete').onclick = onclickDelete
modal.onclick = onclickModal
var selectedNote = 0


window.onclick = onclickWindow

function onclickWindow(){
   console.log(this)
   modal.classList.remove('show')
   
}

function onclickModal(event){
   console.log(this)
   event.stopPropagation()

}


var myNotes = [
   {
      title: "title 1",
      text: "text 1"
   },
   {
      title: "title 2 this one is too big",
      text: "text 2"
   },
   {
      title: "title 3",
      text: "text 3"
   }
]

function onclickCreate(){
   myNotes.push(
      {
         title: 'New Note',
         text: ""
      }
      )
      render()
   }
   
   function onclickOpenNote(event){
   event.stopPropagation()
   // open modal when you click on a note
   modal.classList.add('show')

   selectedNote = Number(this.getAttribute('noteAtt'))
   var title = myNotes[selectedNote].title
   var text = myNotes[selectedNote].text
   // update title and text in the modal
   var noteTitle = app.querySelector('#noteTitle')
   var noteText = app.querySelector('#noteText')
   noteTitle.value = title
   noteText.value = text
}

function onclickSave(){
   // hide the modal
   modal.classList.remove('show')
   console.log(myNotes[selectedNote])
   // save the title and text when you close it
   var modalText = app.querySelector('#noteText')
   var modalInput = app.querySelector('#noteTitle')
   myNotes[selectedNote].title = modalInput.value
   myNotes[selectedNote].text = modalText.value
   render()
}

function onclickDelete(){
   console.log(this)
   modal.classList.remove('show')
   myNotes.splice(selectedNote, 1)
   
   render()
}



function render(){
   
   // clear
   var notes = app.querySelector('.notes')
   notes.innerHTML = ''
   // create
   var i = 0
   for(var note of myNotes){
      // create new div item
      var newNote = document.createElement('div')
      newNote.innerHTML = `
      <div noteAtt="${i}" class="note">
         <div class="title">${note.title}</div>
         <div class="text">${note.text}</div>
      </div>
      `
      notes.append(newNote)
      newNote.querySelector('.note').onclick = onclickOpenNote
      i++
   }
}

render()