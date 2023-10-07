import FetchWeather from "./weather-api";
import displayLocation from "./location";
import displayCondition from "./cloud-condition";
import displayTemp from "./temperature";
import displayWind from "./wind-condition";
import displayHumidity from "./humidity-condition";
import displayAirQuality from "./air-condition";
import switchTemp from "../switch-temp";


let weather;
export default function DomController() {
    const inputCheckbox = document.getElementById("switch");
    const inputSearch = document.getElementById("search");

    const searchEvent = () => {
        inputSearch.addEventListener("keypress", (e) => {
            if(e.key === "Enter") {
                weather = FetchWeather(inputSearch.value)
                displayLocation(weather)
                displayCondition(weather)
                displayTemp(weather)
                displayWind(weather)
                displayHumidity(weather)
                displayAirQuality(weather)
             

            
                inputSearch.value = ""
                inputCheckbox.checked = true
            }
        })
    };

    const checkboxEvent = () => {
        inputCheckbox.addEventListener("click", (e) => {
            if(e.target.checked === false) {
                switchTemp(weather,e)
               
            }
            else if(e.target.checked !== false) {
                switchTemp(weather,e)
              
            }
            
        })
    };

    const onLoadEvent = () => {
        window.addEventListener("load", () => {
            weather = FetchWeather("london")

            displayLocation(weather)
            displayCondition(weather)
            displayTemp(weather)
            displayWind(weather)
            displayHumidity(weather)
            displayAirQuality(weather)
           
        })
    }

    return {
        onLoadEvent,
        searchEvent,
        checkboxEvent,
    }
}