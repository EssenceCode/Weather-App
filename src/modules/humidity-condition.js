import humidity from "./img/humidity.png"

export default function displayHumidity(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".additional")
        const humidityConditionDiv = document.createElement("div")
        const humidityConditionImgDiv = document.createElement("div")
        
        
        const currentHumidity = data.current.humidity
        const avgHumidity = data.forecast.forecastday[0].day.avghumidity
        const rainChance = data.forecast.forecastday[0].day.daily_chance_of_rain

        humidityConditionDiv.classList.add("humidity-condition")
        humidityConditionImgDiv.classList.add("humidity-img")

        

        const currentHumidityDiv = document.createElement("div")
        const avgHumidityDiv = document.createElement("div")
        const rainChanceDiv = document.createElement("div")

        currentHumidityDiv.classList.add("current-humidity")
        avgHumidityDiv.classList.add("avg-humidity")
        rainChanceDiv.classList.add("rain-chance")

        currentHumidityDiv.textContent = `current humidity:${currentHumidity}%`
        avgHumidityDiv.textContent = `average humidity:${avgHumidity}%`
        rainChanceDiv.textContent = `chance of rain:${rainChance}%`

        const humidityImg = document.createElement("img")
        humidityImg.src = humidity


        humidityConditionImgDiv.append(humidityImg)

        humidityConditionDiv.appendChild(currentHumidityDiv)
        humidityConditionDiv.appendChild(avgHumidityDiv)
        humidityConditionDiv.appendChild(rainChanceDiv)


        main.appendChild(humidityConditionImgDiv)
        main.appendChild(humidityConditionDiv)
    })
    .catch((err) => console.log(err));

}