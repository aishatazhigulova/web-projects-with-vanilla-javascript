let loadingEl = document.querySelector('#loading')

let coundownEl = document.querySelector('#countdown')

let yearEl = document.querySelector('#year')

let daysEl = document.querySelector('#days')
let hoursEl = document.querySelector('#hours')
let minutesEl = document.querySelector('#minutes')
let secondsEl = document.querySelector('#seconds')


setTimeout(() => {
    loadingEl.style.display = 'none'
    coundownEl.style.display = 'flex'
    yearEl.innerHTML = currentYear + 1
}, 2000)


let currentYear = new Date().getFullYear()
let newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`)


function updateCountdown() {
    let currentTime = new Date()
    let diff = newYearTime - currentTime

    let days = Math.floor(diff / 1000 / 60 / 60 / 24)
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24
    let minutes = Math.floor(diff / 1000 / 60) % 60
    let seconds = Math.floor(diff / 1000) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds
}


setInterval(updateCountdown, 1000)