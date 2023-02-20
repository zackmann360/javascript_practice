var button = document.querySelector('button')
button.onclick = onclickButton

var input = document.querySelector('input')
var listArray = document.querySelector('ul')
var items = document.querySelectorAll('li')

myarray = []

function onclickButton() {
    if(input.value){
        callApi(input.value)
    }
}


function render() {

    listArray.innerHTML = ''

    for(var item of myarray){
        console.log(item)
        var newCont = document.createElement('li')
        newCont.innerHTML = `
        <div class="image">
            <img src="${item.image}">
        </div>
            <div class="text">${item.title}</div>
        `

        listArray.append(newCont)
    }

}
render()
async function callApi(arg1){
    myarray = []
    
    var rawData = await fetch(` https://api.jikan.moe/v4/anime?q=${arg1}&sfw
    `)
    var data = await rawData.json()
    // console.log(data)

    for(var item of data.data){
        console.log(item)
        var image = item.images.jpg.image_url
        var title = item.title
        console.log(image)
        myarray.push({
            image: image,
            title: title
        })
    }
    render()
}
callApi()