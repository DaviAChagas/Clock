const clockContainer = document.querySelector('.mother-container')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

   const getClockHTML = (daysNames,days,years, months, dates, hours, minutes, seconds) => `

<div class="dayName-container"><span>${daysNames[days]}</span></div>

   <div class="date-container">
   <span>${formatTimeUnit(years)}</span> /
   <span>${formatTimeUnit(months + 1)}</span> /
   <span>${formatTimeUnit(dates)}</span></div>

    <div class="clock-container">
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span> </div>
`

const updateClock  = () => {

const present = new Date();

const daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ]

const days = present.getDay()   

const years = present.getFullYear()
const months = present.getMonth()
const dates = present.getDate() 

const hours = present.getHours()
const minutes = present.getMinutes()
const seconds = present.getSeconds()


clockContainer.innerHTML = getClockHTML(daysNames,days,years, months, dates, hours, minutes, seconds)
}

setInterval(updateClock, 1000)