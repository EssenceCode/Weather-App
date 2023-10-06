import FetchWeather from "./weather-api";
import displayLocation from "./location";
import displayCondition from "./cloud-condition";
import displayTemp, {displayTempF} from "./temperature";
import displayWind from "./wind-condition";
import displayHumidity from "./humidity-condition";
import displayAirQuality from "./air-condition";

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
                console.log(weather)
                inputSearch.value = ""
                inputCheckbox.checked = true
            }
        })
    };

    const checkboxEvent = () => {
        inputCheckbox.addEventListener("click", (e) => {
            if(weather !== undefined) {
                if(e.target.checked === false) {
                    console.log(e.target)
                    console.log(weather)    
                    displayTempF(weather)
                } else {
                    displayTemp(weather)
                }
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