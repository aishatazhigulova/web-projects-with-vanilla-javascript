let clearBtnEl = document.querySelector('#clear')
let showBtnEl = document.querySelector('#show')
let cardsContainerEl = document.querySelector('#cards-container')
let prevBtnEl = document.querySelector('#prev')
let nextBtnEl = document.querySelector('#next')
let currentEl = document.querySelector('#current')
let addContainerEl = document.querySelector('#add-container')
let hideBtnEl = document.querySelector('#hide')
let questionEl = document.querySelector('#question')
let answerEl = document.querySelector('#answer')
let addCardBtnEl = document.querySelector('#add-card')


let activeIndex = 0
let answer
let question

//Event Listeners
showBtnEl.addEventListener('click', () => {
    addContainerEl.classList.add('show')
})


hideBtnEl.addEventListener('click', () => {
    addContainerEl.classList.remove('show')
})


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('inner-card-front')) {
        e.target.parentElement.parentElement.classList.add('show-answer')
    }
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('inner-card-back')) {
        e.target.parentElement.parentElement.classList.remove('show-answer')
    }
})

questionEl.addEventListener('input', (e) => {
    question = e.target.value
})


answerEl.addEventListener('input', (e) => {
    answer = e.target.value
})

addCardBtnEl.addEventListener('click', () => {
    addContainerEl.classList.remove('show')

    questionEl.value = ''
    answerEl.value = ''

    let cardEl = document.createElement('div')
    cardEl.className = 'card'

    cardEl.innerHTML =
        `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${answer}</p>
            </div>
            <div class="inner-card-back">
                <p>${question}</p>
            </div>
        </div>
        `
    cardsContainerEl.appendChild(cardEl)

    activeIndex = document.querySelectorAll('.card').length - 1
    selectSlide(activeIndex) 
})

nextBtnEl.addEventListener('click', () => {
    let cardsEl  = document.querySelectorAll('.card')

    activeIndex++
    selectSlide(activeIndex)
})

prevBtnEl.addEventListener('click', () => {
    let cardsEl  = document.querySelectorAll('.card')

    activeIndex--
    selectSlide(activeIndex)
})

clearBtnEl.addEventListener('click', () => {
    cardsContainerEl.innerHTML = ''
    currentEl.innerHTML = ''
    prevBtnEl.disabled = false
    nextBtnEl.disabled = false
})

function selectSlide(index) {
    let cardsEl  = document.querySelectorAll('.card')
    
    cardsEl.forEach(card => {
        if (card.classList.contains('active')) {
            // card.classList.add('')
            card.classList.remove('active')
        }
    })

    cardsEl[index].classList.add('active')

    currentEl.innerHTML = `${index+1} / ${cardsEl.length}`

    index === cardsEl.length-1 ? nextBtnEl.disabled = true : nextBtnEl.disabled = false

    index === 0 ? prevBtnEl.disabled = true : prevBtnEl.disabled = false
}



