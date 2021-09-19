import { convertKelvintoCelsius } from './exportModules/convertKelvintoCelsius.js'
import { changeToAfternoon,changeToDefault } from './changeBackground.js';

const openWeatherApiUrl = '//api.openweathermap.org/data/2.5/weather?q='
const openWeatherApiKey = '&appid=194256046f9cc13225fb4d3ff9b55d92'
const searchButton = document.querySelector('#searchButton');
const city = document.querySelector("#city");
const theWeather = document.querySelector("#theWeather");
const feelsLike = document.querySelector("#feelsLike");
const weatherDescription = document.querySelector("#weatherDescription")
let cityToBeSearched = document.querySelector("#searchCity");

async function fetchCity() {
let weatherResponse = await fetch(`${openWeatherApiUrl}${cityToBeSearched.value}${openWeatherApiKey}`,{mode: "cors"})
let cityResult = await weatherResponse.json();
const cityContent = cityResult.name
const cityWeather= cityResult.main.temp
const cityFeelsLike = cityResult.main.feels_like;
const weatherDescriptionContent = cityResult.weather[0].description;


city.textContent = "City: " +cityContent;
theWeather.textContent = "Weather: "+ convertKelvintoCelsius(cityWeather)+" C";
feelsLike.textContent = "Feels Like: "+ convertKelvintoCelsius(cityFeelsLike)+" C";
weatherDescription.textContent = weatherDescriptionContent;

if (cityWeather > 303) {
  changeToAfternoon()
}
else {
changeToDefault();
}
}

searchButton.addEventListener("click", fetchCity)