let videoEl = document.querySelector('#video')
let playBtnEl = document.querySelector('#play')
let stopBtnEl = document.querySelector('#stop')
let progressEl = document.querySelector('#progress')
let timeStampEl = document.querySelector('#timestamp')




let updateProgress = () => {
    progressEl.value = (videoEl.currentTime / videoEl.duration) * 100;

    // Get minutes
    let mins = Math.floor(videoEl.currentTime / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
  
    // Get seconds
    let secs = Math.floor(videoEl.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
  
    timeStampEl.innerHTML = `${mins}:${secs}`;
}

let setVideoProgress = () => videoEl.currentTime = (+progressEl.value * videoEl.duration) / 100;
   
let toggleVideoStatus = () => videoEl.paused ? videoEl.play() : videoEl.pause()

let updatePlayIcon = () => {
    videoEl.paused
    ? playBtnEl.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    : playBtnEl.innerHTML = '<i class="fa fa-pause fa-2x"></i>'    
}

let stopVideo = () => {
    videoEl.pause();
    videoEl.currentTime = 0;
}

// Add Event Listeners
videoEl.addEventListener('play', updatePlayIcon);
videoEl.addEventListener('pause', updatePlayIcon);
videoEl.addEventListener('timeupdate', updateProgress);


videoEl.addEventListener('click', toggleVideoStatus);
playBtnEl.addEventListener('click', toggleVideoStatus)
stopBtnEl.addEventListener('click', stopVideo)

progressEl.addEventListener('change', setVideoProgress);


window.addEventListener('DOMContentLoaded', () => {
    progressEl.value = 0
    timeStampEl.textContent = '00:00'
})
