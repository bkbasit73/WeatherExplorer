// Import modules
import { getWeatherData } from './modules/weather-api.js';
import { getUserLocation } from './modules/geolocation.js';
import { storeData } from './modules/storage.js';

// Get weather data button
const getWeatherBtn = document.getElementById('get-weather-btn');

// Add event listener to button
getWeatherBtn.addEventListener('click', () => {
    // Get user location
    getUserLocation()
        .then((location) => {
            // Get weather data for user location
            getWeatherData(location)
                .then((weatherData) => {
                    // Render weather data
                    renderWeatherData(weatherData);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        })
        .catch((error) => {
            console.error('Error getting user location:', error);
        });
});

// Render weather data
function renderWeatherData(weatherData) {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather Icon">
    `;
}