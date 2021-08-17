let currencyOneEl = document.querySelector('#currency-one')
let currencyTwoEl = document.querySelector('#currency-two')

let sumOneEl = document.querySelector('#sum-one')
let sumTwoEl = document.querySelector('#sum-two')

let swapBtnEl = document.querySelector('.swap-btn')
let rateEl = document.querySelector('.rate')



// - Fetch exchange rates from API (https://api.exchangerate-api.com)
// - Display the values for both countries
// - Update values on amount change
// - Swap country rates
currencyOneEl.addEventListener('click', getExchangeRate)
currencyTwoEl.addEventListener('click', getExchangeRate)
sumOneEl.addEventListener('click', getExchangeRate)
sumTwoEl.addEventListener('click', getExchangeRate)



function getExchangeRate() {
fetch(`https://v6.exchangerate-api.com/v6/98a9fd1c08ad4e1e54648d14/latest/${currencyOneEl.value}`)
.then(res => res.json())
.then(data => {
    rateEl.innerText = `1 ${currencyOneEl.value} = ${data.conversion_rates[currencyTwoEl.value]}`
    sumTwoEl.value = sumOneEl.value * data.conversion_rates[currencyTwoEl.value].toFixed(4)
})
}

getExchangeRate()



swapBtnEl.addEventListener('click', () => {
    let temporary = currencyOneEl.value
    currencyOneEl.value = currencyTwoEl.value
    currencyTwoEl.value = temporary
    getExchangeRate()
})