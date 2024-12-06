const weatherAPIKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const unsplashAPIKey = 'YOUR_UNSPLASH_API_KEY';

// Fetch Weather Data
export async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}`
        );
        return response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch Images
export async function fetchImages(query) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAPIKey}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
