import { fetchWeatherData, fetchImages } from './apiModule.js';

// Weather Feature
document.getElementById('fetchWeather').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const weatherData = await fetchWeatherData(city);
    const weatherDiv = document.getElementById('weatherData');
    weatherDiv.innerHTML = `
        <p>City: ${weatherData.name}</p>
        <p>Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
});

// Image Gallery
document.getElementById('searchImages').addEventListener('input', async (e) => {
    const query = e.target.value;
    const images = await fetchImages(query);
    const gallery = document.getElementById('galleryImages');
    gallery.innerHTML = images
        .map(img => `<img src="${img.urls.small}" alt="${img.alt_description}" />`)
        .join('');
});
