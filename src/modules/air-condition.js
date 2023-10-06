import air from "./img/air-quality.png"

export default function displayAirQuality(obj) {
    return obj.then((data) => {
        // console.log(data.current)
        const main = document.querySelector(".additional")
        
        const airConditionDiv = document.createElement("div")
        const airConditionText = document.createElement("div")

        const airConditionImgDiv = document.createElement("div")
        

        

        const airQuality= data.current.air_quality["us-epa-index"]
        
      

        

        airConditionDiv.classList.add("air-condition")
        airConditionImgDiv.classList.add("air-img")

        airConditionDiv.textContent = `air quality:${airQuality}/10`
        // console.log(airQuality)
        
        const airImg = document.createElement("img")
        airImg.src = air

        airConditionImgDiv.appendChild(airImg)

        main.appendChild(airConditionImgDiv)

          
        for (let i = 0; i < 1; i+=1) {
            const airQualityTextDiv = document.createElement("div")
            if(airQuality === 1) {
                airQualityTextDiv.textContent = "Good air quality"
            }
            else if(airQuality === 2) {
                airQualityTextDiv.textContent = "Moderate air quality"
            }
            else if(airQuality === 3) {
                airQualityTextDiv.textContent = "Bad air quality"
            }
            else if(airQuality === 4) {
                airQualityTextDiv.textContent = "Unhealthy air quality"
            }
            else if(airQuality === 5) {
                airQualityTextDiv.textContent = "Very Unhealthy air quality"
            }
            else if(airQuality === 6) {
                airQualityTextDiv.textContent = "Hazardous air quality"
            }


        main.appendChild(airQualityTextDiv)
            
        }


        main.appendChild(airConditionText)
        main.appendChild(airConditionDiv)


    })
} 