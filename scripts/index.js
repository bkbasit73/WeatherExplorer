// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Fetch Weather Data
async function fetchWeatherData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    const data = await response.json();
    console.log(data); // Process and display data in a widget
}

// Fetch Stock Data
async function fetchStockData() {
    const response = await fetch('https://api.example.com/stock-data');
    const data = await response.json();
    console.log(data); // Display stock data dynamically
}

// Fetch News Data
async function fetchNewsData() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const data = await response.json();
    console.log(data); // Display news headlines
}

// Initialize all data
fetchWeatherData();
fetchStockData();
fetchNewsData();
