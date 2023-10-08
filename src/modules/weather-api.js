// import displayLocation from "./location";

export default async function FetchWeather(location) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json&?key=7346fff7ad3741f498424126233009&aqi=yes&q=${location}`;
        const response = await fetch(url);
        if(response.status === 200) {
            const weatherData = await response.json()
        
            return weatherData
        } 
        const errorDiv = document.querySelector(".error-container")
        const errorH1 = document.createElement("h1")

        const error = new Error(response.status)
        error.response = response

        errorDiv.textContent = ""

        errorH1.textContent = `${error} bad request`
        console.log(response.statusText)

        errorDiv.appendChild(errorH1)
        throw(error)
        
        
    } catch (err) {
        console.log(err)
    }
}

