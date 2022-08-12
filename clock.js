const weekday = document.querySelector('.weekdays')
const date = document.querySelector('.date')
const clock = document.querySelector('.clock') 

const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
]

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getDateData = () => {
    const dateData = new Date() 

    let dayIndex = dateData.getDay()
    
    let seconds = dateData.getSeconds()
    let minutes = dateData.getMinutes()
    let hours = dateData.getHours()

    let dates = dateData.toLocaleString("en-US", { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

        return {
            dayIndex,
            seconds,
            minutes,
            hours,
            dates
    }
}

const putDataOnScreen = ({dayIndex, seconds, minutes, hours, dates}) => {
        
        let day = ` <h1>${ days[dayIndex] }</h1>  `

        let clockSpans = `
            <span class="time">${formatTimeUnit(hours)}</span>

            <span class="time">${formatTimeUnit(minutes)}</span>

            <span class="time">${formatTimeUnit(seconds)}</span>
`

    weekday.innerHTML = day
    date.innerHTML = `<h2>${dates}</h2>`
    clock.innerHTML = clockSpans
}


const updateScreen = () => {
    putDataOnScreen(getDateData())
}

setInterval(updateScreen, 1000)