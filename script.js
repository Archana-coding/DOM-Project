const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#FruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")
console.log(fruitForm)
fruitForm.addEventListener("submit", exfr)

function exfr(e)
    {
        e.preventDefault();
        fetchFruitData(e.target[0].value)
        e.target[0].value =""    
    }
    function processResponse(resp){
        console.log("Response",resp)
        if(resp.ok){
            return resp.json()
        }else {
            throw "Error: http Status Code=" +resp.status
        }
    }
    let calories = 0
    function addFruit(fruit){
        const li = document.createElement("li")
        li.textContent = fruit.name
        fruitList.appendChild(li)
        calories += fruit["nutritions"]["calories"]
        fruitNutrition.textContent = calories
    }


