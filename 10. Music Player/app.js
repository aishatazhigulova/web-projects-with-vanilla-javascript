let prevBtnEl = document.querySelector('#prev')
let playBtnEl = document.querySelector('#play')
let nextBtnEl = document.querySelector('#next')


let audioEl = document.querySelector('#audio')
let coverEl = document.querySelector('#cover')

let progressEl = document.querySelector('#progress')
let progressContainerEl = document.querySelector('#progress-container')
let titleEl = document.querySelector('#title')

let musicContainerEl = document.querySelector('#music-container')


let songs = ['hey', 'summer', 'ukulele']
let songIndex = 2

loadSong()

function loadSong() {
    audioEl.src = `music/${songs[songIndex]}.mp3`
    coverEl.src = `images/${songs[songIndex]}.jpg`
    titleEl.textContent = songs[songIndex]
}


function playTrack() {
    musicContainerEl.classList.add('play');
    playBtnEl.querySelector('i.fas').classList.remove('fa-play');
    playBtnEl.querySelector('i.fas').classList.add('fa-pause');
  
    audioEl.play();
}


function PauseTrack() {
    musicContainerEl.classList.remove('play')

    playBtnEl.innerHTML = `<i class="fas fa-play"></i>`
    audioEl.pause()

}

function nextTrack() {
    songIndex++

    if (songIndex > songs.length-1) songIndex = 0

    loadSong()
    playTrack()
}

function prevTrack() {
    songIndex--

    if (songIndex < 0) songIndex = 2

    loadSong()
    playTrack()
}


function updateProgress() {
    progressEl.style.width = `${(audioEl.currentTime / audioEl.duration) * 100}%`
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioEl.duration;
    audioEl.currentTime = (clickX / width) * duration;
}



playBtnEl.addEventListener('click', () => {
    const isPlaying = musicContainerEl.classList.contains('play');

    if (isPlaying) {
      PauseTrack();
    } else {
        playTrack();
    }
})
audioEl.addEventListener('timeupdate', updateProgress);
progressContainerEl.addEventListener('click', setProgress)
nextBtnEl.addEventListener('click', nextTrack)
prevBtnEl.addEventListener('click', prevTrack)
audioEl.addEventListener('ended', nextTrack)









