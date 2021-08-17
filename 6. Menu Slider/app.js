let toggleBtnEl = document.querySelector('.toggle')
let ctaBtnEl = document.querySelector('.cta-btn')
let closeBtnEl = document.querySelector('.close-btn')

let modalContainerEl = document.querySelector('.modal-container')

let bodyEl = document.body


toggleBtnEl.addEventListener('click', () => {
    bodyEl.classList.toggle('show-nav')
})

ctaBtnEl.addEventListener('click', () => {
    modalContainerEl.classList.add('show-modal')
})


closeBtnEl.addEventListener('click', (e) => {
    modalContainerEl.classList.remove('show-modal')
})


window.addEventListener('click', (e) => {
    e.target === modalContainerEl ? modalContainerEl.classList.remove('show-modal') : false
})

