const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")
console.log(fruitForm)
fruitForm.addEventListener("submit", exfr)

function exfr(e)
    {
        e.preventDefault();
        fetchFruitData(e.target[0].value)
        e.target[0].value =""    
    }
    /*function fetchFruittData(fruits)
    {
        fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruits}`)
        .then(processResponse)
        //.then(resp => resp.json())
        .then(data => addFruit(data))
        .catch(err => console.log(err))
    }*/
   async function fetchFruitData(fruit){
    try{
        const response = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        if(response.ok){
            const data = await response.json()
            addFruit(data)
        } else {
            throw "Error" + response.status
        }
     }catch(err)
    {
     console.log(err)
    }
}

 /*  function processResponse(resp){
        console.log("Response",resp)
        if(resp.ok){
            return resp.json()
        }else {
            throw "Error: http Status Code=" +resp.status
        }
    }*/
   let calories = 0
    function addFruit(fruit){
        const li = document.createElement("li")
        li.textContent = fruit["name"]
        fruitList.appendChild(li)
        calories += fruit["nutritions"]["calories"]
        fruitNutrition.textContent = calories
    }

