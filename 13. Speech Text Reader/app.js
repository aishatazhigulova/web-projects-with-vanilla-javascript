let mainEl = document.querySelector('main')
let voicesSelectEl = document.querySelector('#voices');
let textareaEl = document.querySelector('#text');
let readBtnEl = document.querySelector('#read');
let toggleBtnEl = document.querySelector('#toggle');
let closeBtnEl = document.querySelector('#close');
let textBoxEl = document.querySelector('#text-box')

//Speech Web Api
const message = new SpeechSynthesisUtterance();

const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

//Add boxes to main tag
data.forEach(element => {
    let box = document.createElement('div')
    box.className = 'box'
    box.innerHTML = 
    `
    <img src="${element.image}">
    <p class="info">${element.text}</p>
    `
    mainEl.appendChild(box)

    box.addEventListener('click', () => {
        setTextMessage(element.text);
        speakText();

        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    })
})

//Add to select tag
function getVoices() {
    let voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
        let option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
    
        voicesSelectEl.appendChild(option);
      });
}

getVoices()

// Set text
function setTextMessage(text) {
    message.text = text;
}
  
  // Speak text
function speakText() {
    speechSynthesis.speak(message);
}


toggleBtnEl.addEventListener('click', () => {
    textBoxEl.classList.toggle('show')
})

closeBtnEl.addEventListener('click', () => {
    textBoxEl.classList.remove('show')
})


voicesSelectEl.addEventListener('change', (e) => {
    speechSynthesis.voiceChange(e.target.value)
})

readBtnEl.addEventListener('click', () => {
    setTextMessage(textareaEl.value);
    speakText();
})
