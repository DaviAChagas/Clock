const clockContainer = document.querySelector('.mother-container')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit


const formatColor = hours => {

    if((06 >= formatTimeUnit(hours)) || ((formatTimeUnit(hours) < 18))){
        return "#369FFF, #006CE6"
    }
    if((05 <= formatTimeUnit(hours)) || ((formatTimeUnit(hours) >= 18))){
        return "#7C838A, #E6F3FF"
}
}


const getColorSpan = (hours) => `

<style>

@media only screen and (max-width: 700px) and (min-width: 374px){
 .clock-container span, .date-container span{ 
     padding: clamp(4px, 1.4vw, 2rem);
     background: linear-gradient(to bottom right, ${formatColor(hours)});
    }}

@media only screen and (min-width: 701px) {
 .clock-container span {
 background: linear-gradient(to bottom right, ${formatColor(hours)});
}}

</style>
`

   const getClockHTML = (daysNames,days,years, months, dates, hours, minutes, seconds) => `

   ${getColorSpan(hours)}

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