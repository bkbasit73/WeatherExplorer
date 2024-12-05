// Import modules
import { getWeatherData } from './modules/weather-api.js';
import { getUserLocation } from './modules/geolocation.js';
import { storeData } from './modules/storage.js';

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
    
    // Render weather data
    function renderWeatherData(weatherData) {
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');
    
        const weatherImage = document.createElement('img');
        weatherImage.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        weatherCard.appendChild(weatherImage);
    
        const weatherDescription = document.createElement('p');
        weatherDescription.textContent = weatherData.weather[0].description;
        weatherCard.appendChild(weatherDescription);
    
        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
        weatherCard.appendChild(temperature);
    
        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
        weatherCard.appendChild(humidity);
    
        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
        weatherCard.appendChild(windSpeed);
    
        document.querySelector('main').appendChild(weatherCard);
    }