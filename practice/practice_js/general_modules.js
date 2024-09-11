// Variables and Constants
const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m"

/** async as arrow function */
const getWeather = async () => {
    let response = await fetch(weatherURL)
    let data = await response.json()
    return data
}

/** exported modules */
export {getWeather}

