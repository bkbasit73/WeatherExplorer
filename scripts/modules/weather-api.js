const weatherWidget = document.getElementById("weather-widget");
const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace this with your OpenWeather API Key

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        weatherWidget.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
        `;
    } catch (error) {
        weatherWidget.innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

fetchWeather();
