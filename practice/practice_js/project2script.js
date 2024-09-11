// Import functionality from other modules
import { increment, count } from "./counter.js";
import { getWeather } from "./general_modules.js";

// Define variables
// const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m"


// Attach event listeners to elements
document.getElementById("voteBtn").addEventListener("click", upVote)

// Startup code that runs at or during page load
// console.log("Retrieving weather data");
// console.log(await getWeather());



// Function to define specific behaviours
function upVote(){
    // Code that runs when UpVote is clicked
    increment();
    console.log(count);
    document.getElementById("voteValue").innerText = count;
}


// Functions for general use

// Function - specific behaviours
/** async/await */
// async function getWeather() {
//     let response = await fetch(weatherURL)
//     let data = await response.json()
//     return data
// }

/** promise chaining */
// function getWeather() {
//     return fetch (weatherURL)
//     .then(response => response.json())
//     .then(data => {
//         return data
//     })
// }

/** async as arrow function */
// const getWeather = async () => {
//     let response = await fetch(weatherURL)
//     let data = await response.json()
//     return data
// }

/** promise chaining as arrow function */
// const getWeather = () => {
//     return fetch(weatherURL)
//     .then(response => response.json())
//     .then(data => data)
// }

// Startup code
displayweather()

/** calling an async arrow function */
// let currentWeather = await getWeather()
// console.log(currentWeather);

/** calling a promise arrow function */
// getWeather().then(currentWeather => {
//     console.log(currentWeather);
    
// })

// Functions - specific behaviours
async function displayweather() {
    let currentWeather = await getWeather()
    console.log(currentWeather.current.temperature_2m);
    document.getElementById("current_temperature").textContent = currentWeather.current.temperature_2m
    
}


