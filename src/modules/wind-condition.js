// import humidity from "./img/humidity.png"
import wind from "./img/wind.png"

export default function displayWind(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".additional")
        const windConditionDiv = document.createElement("div")
        const windConditionImgDiv = document.createElement("div")
        main.textContent = "";

        const currentWind = data.current.wind_kph
        const maxWind = data.forecast.forecastday[0].day.maxwind_kph

        

        windConditionImgDiv.classList.add("wind-img")

        windConditionDiv.classList.add("wind-condition")

      

        const currentWindDiv = document.createElement("div") 
        const maxWindDiv = document.createElement("div") 

        currentWindDiv.classList.add("current-wind")
        maxWindDiv.classList.add("max-wind")
        
        currentWindDiv.textContent = `Current: ${currentWind} kph`
        maxWindDiv.textContent = `Max: ${maxWind} kph`


        const windImg = document.createElement("img")
        windImg.src = wind


        windConditionImgDiv.appendChild(windImg)
        windConditionDiv.appendChild(currentWindDiv)
        windConditionDiv.appendChild(maxWindDiv)


        main.appendChild(windConditionImgDiv)
        main.appendChild(windConditionDiv)


    })
}