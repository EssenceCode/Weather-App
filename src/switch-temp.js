export default function switchTemp(obj, e) {
    return obj.then((data) => {
     
        const feelsLikeTemp = document.querySelector(".feelslike");
        const currentTemp = document.querySelector(".current");
        const minTemp = document.querySelector(".min")
        const maxTemp = document.querySelector(".max")

        const {current} = data
        const {forecast} = data;
     
        const {forecastday} = forecast
        const {day} = forecastday[0]

        const feelslikeC = current.feelslike_c
        const tempC = current.temp_c
        const avgtempC = day.avgtemp_c
        const maxtempC = day.maxtemp_c

        const feelslikeF = current.feelslike_f
        const tempF = current.temp_f
        const avgtempF = day.avgtemp_f
        const maxtempF = day.maxtemp_f

        if(e.target.checked === false) {
          
            feelsLikeTemp.textContent = `feelslike: ${feelslikeF}°F`
            currentTemp.textContent = `current: ${tempF}°F`
            minTemp.textContent = `min: ${avgtempF}°F`
            maxTemp.textContent = `max: ${ maxtempF}°F`
           
           
        } else {
            console.log("world")
            feelsLikeTemp.textContent = `feelslike: ${feelslikeC}°C`
            currentTemp.textContent = `current: ${tempC}°C`
            minTemp.textContent = `min: ${avgtempC}°C`
            maxTemp.textContent = `max: ${maxtempC}°C`
        }

    })
    .catch((err) => console.log(err))
}