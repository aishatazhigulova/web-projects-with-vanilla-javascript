let settingsBtnEl = document.querySelector('#settings-btn')
let settingsEl = document.querySelector('#settings')


let textEl = document.querySelector('#text')

let timeEl = document.querySelector('#time')
let scoreEl = document.querySelector('#score')
let wordEl = document.querySelector('#word')


let difficultyEl = document.querySelector('#difficulty')

let endGameContainerEl = document.querySelector('.end-game-container')



//Event Listeners
settingsBtnEl.addEventListener('click', () => {
    settingsEl.classList.toggle('hide')
})

difficultyEl.addEventListener('change', (e) => {
    let difficulty = e.target.value

    localStorage('difficulty', difficulty)
})


textEl.addEventListener('input', (e) => {
    if (wordEl.textContent === e.target.value) {
        updateWord()
        updateScore()

        e.target.value = ''

        if (difficultyEl.value === 'easy') {
            time += 5
        }
    
        if (difficultyEl.value === 'medium') {
            time += 3
        }
    
        if (difficultyEl.value === 'hard') {
            time += 2
        }
    }
})


document.addEventListener('click', (e) => {
    let el = e.target
    if (el.classList.contains('reload')) {
        window.location.reload()
    }
})






let words = ['apple', 'mango', 'avocado', 'cherry']

let score = 0

let time = 10

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

//When pages loads
textEl.focus()


function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}


function updateWord() {
    wordEl.innerHTML = words[Math.floor(Math.random() * words.length)]
}

updateWord()


function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver()  
    }
}

function gameOver() {
    endGameContainerEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>You final score is ${score}</p>
        <button class="reload">Reload</button> 
    `
    endGameContainerEl.style.display = 'flex';
}


let timeInterval = setInterval(updateTime, 1000)









