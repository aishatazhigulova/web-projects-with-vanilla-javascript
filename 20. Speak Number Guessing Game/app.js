let msgEl = document.querySelector('#msg')

let randomNum = Math.floor(Math.random() * 100 +1)

console.log(randomNum)

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition()

recognition.start()

recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => {
    recognition.start()
})

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})


function onSpeak(e) {
    let msg = e.results[0][0].transcript

    writeMessage(msg)
    checkNumber(msg)
}


function writeMessage(msg) {
    msgEl.innerHTML = 
    `
        <div>You said</div>
        <div class="box">${msg}</div>
    `
}


function checkNumber(msg) {
    let num = +msg

  // Check if valid number
    if (Number.isNaN(num)) {
        msgEl.innerHTML += '<div>That is not a valid number</div>';
        return;
    }

    // Check in range
    if (num > 100 || num < 1) {
        msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
        return;
    }

    if (num === randomNum) {
        document.body.innerHTML = 
        `
            <h2>Congrats! You have guessed the number!
            <br>
            <br>
            It was ${num}</h2>
            <button class="play-again" id="play-again"></button>
        `  
    } else if (num > randomNum) {
        msgEl.innerHTML += 
        `
            <div>GO LOWER</div>
        `
    } else {
        msgEl.innerHTML += 
        `
            <div>GO HIGHER</div>
        `
    }
}