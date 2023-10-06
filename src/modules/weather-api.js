// import displayLocation from "./location";

export default async function FetchWeather(location) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json&?key=7346fff7ad3741f498424126233009&aqi=yes&q=${location}`;
        const response = await fetch(url);
        const weatherData = await response.json()
        
        return weatherData
    } catch (err) {
        console.log(err)
    }
}

