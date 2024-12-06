import Chart from 'chart.js';

function renderWeatherChart(data) {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    const weatherChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['12:00', '03:00', '06:00', '09:00', '12:00'],
            datasets: [{
                label: 'Temperature',
                data: [20, 22, 19, 21, 24], // Sample data, replace with actual API data
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            }]
        }
    });
}
