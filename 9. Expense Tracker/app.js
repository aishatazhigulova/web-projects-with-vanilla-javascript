let formEl = document.querySelector('#form')
let textInputEl = document.querySelector('#text')
let amountInputEl = document.querySelector('#amount')

let listEl = document.querySelector('#list')

let balanceEl = document.querySelector('#balance')
let moneyPlusEl = document.querySelector('#money-plus')
let moneyMinusEl = document.querySelector('#money-minus')


//Event Listeners
// formEl.addEventListener('submit', addTransaction)



// function addTransaction(e) {
//     e.preventDefault()

//     textInputEl.value.trim() && amountInputEl.value.trim()
//     ? expenseOrIncome()
//     : alert('Please fill the form')

//     textInputEl.value = ''
//     amountInputEl.value = ''
// }

let dummyTransactions = [
    {id: 1, text: 'Flower', amount: -29}
]


let transactions = dummyTransactions


function addTransactionDOM(transaction) {
    //Get sign

    let sign 
}


