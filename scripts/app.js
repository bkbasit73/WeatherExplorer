import { setupWeatherWidget } from './modules/weather.js';
import { setupStockWidget } from './modules/stocks.js';
import { setupNewsWidget } from './modules/news.js';

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load stored theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Initialize Widgets
setupWeatherWidget();
setupStockWidget();
setupNewsWidget();
