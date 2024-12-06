// Import modules
import { getWeatherData } from './modules/weather-api.js';
import { getUserLocation } from './modules/news.js';
import { storeData } from './modules/stock.js';
import { renderWeatherCard } from './modules/weather-card.js';

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
                    // Render weather card
                    renderWeatherCard(weatherData);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        })
        .catch((error) => {
            console.error('Error getting user location:', error);
        });
});
