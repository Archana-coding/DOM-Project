(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

   /* function processResponse(resp){
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


},{}]},{},[1]);
