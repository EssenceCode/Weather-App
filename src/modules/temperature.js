export default function displayTemp(obj) {
    return obj.then((data) => {
        const main = document.querySelector(".temp-container");
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("temperature")
        main.textContent = ""
        const {current} = data
        const {forecast} = data;
        // const {day} = forecast[0]
        // console.log(day)
        const {forecastday} = forecast
        const {day} = forecastday[0]

        const feelslikeC = current.feelslike_c
        const tempC = current.temp_c
        const avgtempC = day.avgtemp_c
        const maxtempC = day.maxtemp_c

        const currentTemp = [feelslikeC, tempC]
        const currentTempText = ["feelslike", "current"]
        const avgAndMaxTemp = [avgtempC, maxtempC]
        const avgAndMaxTempText = ["min", "max"]
        
        for(let i = 0; i < currentTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${currentTempText[i]}: ${currentTemp[i]}°C`
            div.classList.add(`${currentTempText[i]}`)
            
            tempDiv.appendChild(div)
        }

        for(let i = 0; i < avgAndMaxTemp.length; i += 1) {
            const div = document.createElement("div")
            div.textContent = `${avgAndMaxTempText[i]}: ${avgAndMaxTemp[i]}°C`
            div.classList.add(`${avgAndMaxTempText[i]}`)
            
            tempDiv.appendChild(div)
        }

        
        main.appendChild(tempDiv)    
    })
    .catch((err) => console.log(err));
}
