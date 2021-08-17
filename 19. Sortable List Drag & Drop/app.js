let draggableListEl = document.querySelector('#draggable-list')
let checkBtnEl = document.querySelector('#check')


const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];


let listItems = []

let dragStartIndex

createList()

//Insert list items into DOM


function createList() {
    [...richestPeople].forEach((person, index) => {
        let listItem = document.createElement('li')
        listItem.setAttribute('data-index', index)
        listItem.innerHTML = `
        <span class="number">${index+1}</span
        <div class="draggable" draggable="true"><
            <p class="person-name"${person}></p>
            <i class="fas fa-grip"></i>
        /div>
        `

        listItems.push(listItem)
        draggableListEl.appendChild(listItem)

    })
}