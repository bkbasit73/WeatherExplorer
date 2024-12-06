// Main Application JavaScript
import { WeatherService } from './services/weatherService.js';
import { NewsService } from './services/newsService.js';
import { ThemeManager } from './modules/themeManager.js';
import { ChartManager } from './modules/chartManager.js';

class TechInsightsDashboard {
    constructor() {
        this.weatherService = new WeatherService();
        this.newsService = new NewsService();
        this.themeManager = new ThemeManager();
        this.chartManager = new ChartManager();

        this.initializeApp();
    }

    async initializeApp() {
        try {
            this.setupThemeToggle();
            await this.loadWeatherData();
            await this.loadNewsData();
            this.renderTechTrendsChart();
        } catch (error) {
            this.handleError(error);
        }
    }

    setupThemeToggle() {
        const themeSwitch = document.getElementById('theme-switch');
        themeSwitch.addEventListener('change', () => {
            this.themeManager.toggleTheme();
        });
    }

    async loadWeatherData() {
        const weatherContainer = document.getElementById('weather-container');
        try {
            const weatherData = await this.weatherService.getCurrentWeather('New York');
            weatherContainer.innerHTML = `
                <p>Temperature: ${weatherData.main.temp}°C</p>
                <p>Condition: ${weatherData.weather[0].description}</p>
            `;
        } catch (error) {
            weatherContainer.innerHTML = 'Unable to load weather data';
        }
    }

    async loadNewsData() {
        const newsContainer = document.getElementById('news-container');
        try {
            const newsArticles = await this.newsService.getTopTechNews();
            newsContainer.innerHTML = newsArticles.map(article => `
                <div class="news-item">
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                </div>
            `).join('');
        } catch (error) {
            newsContainer.innerHTML = 'Unable to load news';
        }
    }

    renderTechTrendsChart() {
        const ctx = document.getElementById('trendChart').getContext('2d');
        this.chartManager.createTechTrendsChart(ctx);
    }

    handleError(error) {
        console.error('Application Error:', error);
        // Implement user-friendly error notification
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new TechInsightsDashboard();
});