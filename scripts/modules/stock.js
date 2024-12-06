const stockChartCanvas = document.getElementById("stock-chart");
const stockData = [150, 160, 145, 170, 165]; // Mock stock prices

function renderStockChart() {
    const ctx = stockChartCanvas.getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            datasets: [
                {
                    label: "Stock Prices",
                    data: stockData,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    fill: true,
                },
            ],
        },
    });
}

// Include Chart.js via CDN in `index.html`
renderStockChart();
