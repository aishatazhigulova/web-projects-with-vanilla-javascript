
// - Fetch random users from the [randomuser.me](https://randomuser.me) API
// - Use forEach() to loop and output user/wealth
// - Use map() to double wealth
// - Use filter() to filter only millionaires
// - Use sort() to sort by wealth
// - Use reduce() to add all wealth


const mainEl = document.getElementById('main');
const addUserBtnEl = document.getElementById('add-user');
const doubleBtnEL = document.getElementById('double');
const showMillionairesBtnEl = document.getElementById('show-millionaires');
const sortBtnEl = document.getElementById('sort');
const calculateWealthBtnEL = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Add new obj to data arr
function addData(obj) {
    data.push(obj);
    updateDOM();
}

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  
  addData(newUser);
}


function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  
    providedData.forEach(user => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
      mainEl.appendChild(element);
    });
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}


function doubleMoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2}
    })
    updateDOM(data)
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    mainEl.appendChild(wealthEl);
}

function showMillionaires() {
    data = data.filter(user => user.money > 1000000)

    updateDOM(data)
}


// Event listeners
addUserBtnEl.addEventListener('click', getRandomUser);
doubleBtnEL.addEventListener('click', doubleMoney);
sortBtnEl.addEventListener('click', sortByRichest);
showMillionairesBtnEl.addEventListener('click', showMillionaires);
calculateWealthBtnEL.addEventListener('click', calculateWealth);
