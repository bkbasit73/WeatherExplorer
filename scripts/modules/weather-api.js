// Import API key from environment variables
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

// Function to get weather data from OpenWeatherMap API
export function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error('Error fetching weather data:', error));
}