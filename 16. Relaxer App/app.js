let containerEl = document.querySelector('.container')
let circleEl = document.querySelector('.circle')
let textEl = document.querySelector('.text')


let totalTime = 7500
let breathTime = (totalTime / 5) * 2
let holdTime = (totalTime / 5)

// window.addEventListener('DOMContentLoaded', () => {
//     textEl.textContent = texts[index]

// })

function breathAnimation() {
    textEl.textContent = 'Breathe In!'
    containerEl.className = 'container grow'
    setTimeout(() => {
        textEl.textContent = 'Hold'

        setTimeout(() => {
            containerEl.className = 'container shrink'
            textEl.textContent = 'Breathe Out!'

        }, holdTime)
    }, breathTime)
}

breathAnimation()

setInterval(breathAnimation, totalTime)