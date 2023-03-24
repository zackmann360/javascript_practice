var app = document.querySelector('.app')
// day object definition
// var day = {
//     date : '22 Mar 2023',
//     day : 'monday',
//     temperture : 0,
//     weather : 'sunny',
//     percipitation : 0,
//     humidity : 0,
//     wind : 0
// }

var days = [
    {
        date: '22 Mar 2023',
        day: 'Wednesday',
        temperature: 55,
        weather: 'Sunny',
        percipitation: 0,
        humidity: 20,
        wind: 35
    },
    {
        date: '23 Mar 2023',
        day: 'Thursday',
        temperature: 43,
        weather: 'Rain',
        percipitation: 99,
        humidity: 55,
        wind: 38
    },
    {
        date: '24 Mar 2023',
        day: 'Friday',
        temperature: 55,
        weather: 'Sunny',
        percipitation: 0,
        humidity: 20,
        wind: 5
    },
    {
        date: '25 Mar 2023',
        day: 'Saturday',
        temperature: 32,
        weather: 'Snow',
        percipitation: 76,
        humidity: 45,
        wind: 32
    }
]



var dayIndex = 0

//update days list component
// left side
var elementDay = app.querySelector('.day')
var date = app.querySelector('.date')
var temp = app.querySelector('.temperature')
var weather = app.querySelector('.sunny')
// right size
var percip = app.querySelector('#percip')
var humid = app.querySelector('#humid')
var wind = app.querySelector('#wind')

var thisDay = app.querySelectorAll('.day')
for(var thatDay of thisDay){
    thatDay.onclick = onclickThatDay
}

function onclickThatDay(){
    // get the index of thatDay
    var attIndex = this.getAttribute('index')
    dayIndex = Number(attIndex)
    render()
}


function render() {
    var currentDay = days[dayIndex]
    console.log(currentDay)

    // update left
    elementDay.innerHTML = currentDay.day
    date.innerHTML = currentDay.date
    temp.innerHTML = currentDay.temperature + '°F'
    weather.innerHTML = currentDay.weather

    // update right
    percip.innerHTML = currentDay.percipitation + ' %'
    humid.innerHTML = currentDay.humidity + ' %'
    wind.innerHTML = currentDay.wind + ' mph'

    // set the current day
    var activeDay = app.querySelector('.active')
    activeDay.classList.remove('active')
    var selectedDay = app.querySelector('#selectedDay' + dayIndex)
    selectedDay.classList.add('active')

    // update days list
    // var smallDay = app.querySelector('#selectedDay0')
    // var smallTemp = smallDay.querySelector('#smallTemp')
    // smallTemp.innerHTML = days[0].temperature + '°F'

    // var smallDay1 = app.querySelector('#selectedDay1')
    // var smallTemp1 = smallDay1.querySelector('#smallTemp')
    // smallTemp1.innerHTML = days[1].temperature + '°F'

    // var smallDay2 = app.querySelector('#selectedDay2')
    // var smallTemp2 = smallDay2.querySelector('#smallTemp')
    // smallTemp2.innerHTML = days[2].temperature + '°F'

    // var smallDay3 = app.querySelector('#selectedDay3')
    // var smallTemp3 = smallDay3.querySelector('#smallTemp')
    // smallTemp3.innerHTML = days[3].temperature + '°F'

    for (var i = 0; i < 4; i += 1) {
        var smallDay = app.querySelector('#selectedDay' + i)
        var smallTemp = smallDay.querySelector('#smallTemp')
        smallTemp.innerHTML = days[i].temperature + '°F'
    }


}
render()



// var app = document.querySelector('.app')
// var day3 = app.querySelector('#selectedDay2')
// var day4 = app.querySelector('#selectedDay3')
// console.log(day, day2, day3, day4)
