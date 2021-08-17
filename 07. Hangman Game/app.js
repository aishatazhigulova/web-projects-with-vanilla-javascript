const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['laptop', 'macbook', 'javascript', 'internet'];

let selectedWord = words[Math.floor(Math.random() * words.length)]

let correctLetters = 'laptop'.split('')
let wrongLetters = []

function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter =>
                `
                    <span class="letter">
                        ${correctLetters.includes(letter) ? letter : ''}
                    </span>
                `
            )
            .join('')}
  `;

    let innerWord = wordEl.innerText.replace(/\n/g, '')
    
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congradulations'
        popup.style.display = 'flex'
    }
}

displayWord()

function showNotification() {
    notification.classList('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}
function updateWrongLettersEl() {
    console.log(1)
}


window.addEventListener("keydown", (e) => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letter = e.key

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)
                displayWord()
            } else {
                showNotification()
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)
                updateWrongLettersEl()
            } else {
                showNotification()
            }
        }
    }
})

