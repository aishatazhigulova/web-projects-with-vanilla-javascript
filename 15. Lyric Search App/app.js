// ## LyricsSearch App

// Find songs, artists and lyrics using the [lyrics.ovh](https://lyrics.ovh) API

// ## Project Specifications

// - Display UI with song/artist input
// - Fetch songs/artists and put in DOM
// - Add pagination
// - Add get lyrics functionality and display in DOM


let formEl = document.querySelector('#form')
let searchEl = document.querySelector('#search')

let resultEl = document.querySelector('#result')

let apiURL = 'https://api.lyrics.ovh'

async function searchSongs(term) {
    let response = await fetch(`${apiURL}/v1/suggest/${term}`)
    let data = response.json()
    console.log(data)
}



formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    let text = searchEl.value

    if (!text) {
        alert('Please type in a search input')
    } else {
        searchSongs(text)
    }
})


