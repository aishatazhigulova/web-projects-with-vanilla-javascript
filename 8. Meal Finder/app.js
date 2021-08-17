let formEl = document.querySelector('#submit')
let searchEl = document.querySelector('#search')
let randomEl = document.querySelector('#random')

let resultHeadingEl = document.querySelector('#result-heading')


let mealsEl = document.querySelector('#meals')
let singleMealEl = document.querySelector('#single-meal')


function searchMeal(e) {
    e.preventDefault()

    singleMealEl.innerHTML = ''
    
    let input = searchEl.value

    if (input) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => res.json())
            .then(data => {
                resultHeadingEl.innerHTML = `<h3>Search results for <span class="tag">${input}</span></h3>`
                
                if (data.meals === null) {
                    resultHeadingEl.innerHTML = '<h3>There are no search results. Try Again</h3>'
                } else {
                    console.log(data.meals)

                    mealsEl.innerHTML = data.meals
                    .map(
                        meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="" class="meal__img">
                            <div class="meal__title" mealId = "${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                        `
                    )
                    .join('')
                }
            })
            searchEl.value = ''    
    } else {
        alert('Please enter a search value')
    }
}



function getMealById(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {

            let meal = data.meals[0]

            addToDOM(meal)
        })
}


function getRandomMeal() {
    mealsEl.innerHTML = ''
    resultHeadingEl.innerHTML = ''
    

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {            
            let meal = data.meals[0]
            addToDOM(meal)
        })
    searchEl.value = ''    
}


function addToDOM(meal) {
    let ingredients = []
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
        ingredients.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
        } else {
        break;
        }
    }
        
    singleMealEl.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="" class="single__img">
        <div class="category">
            <p class="category__title--first">${meal.strCategory}</p>
            <p class="category__title--second">${meal.strArea}</p>
        </div>
        <p>${meal.strInstructions}</p>
        <h3>Ingrediants</h3>
        <div class="ingredients">
            ${ingredients.map(ing => `<div class="ingredient">${ing}</div>`).join('')}
        </div>                
    `
}



formEl.addEventListener('submit', searchMeal)

mealsEl.addEventListener('click', (e) => {
    let Mealid = e.target.getAttribute('mealId')
    getMealById(Mealid)
})

randomEl.addEventListener('click', getRandomMeal)