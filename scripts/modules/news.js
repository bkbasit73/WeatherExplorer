const newsContainer = document.getElementById("news-container");
const newsApiKey = "YOUR_NEWS_API_KEY"; // Replace this with your NewsAPI key

async function fetchNews() {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${newsApiKey}`
        );
        const { articles } = await response.json();
        newsContainer.innerHTML = articles
            .slice(0, 5)
            .map(
                (article) => `
                <div>
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                </div>
            `
            )
            .join("");
    } catch (error) {
        newsContainer.innerHTML = `<p>Error fetching news.</p>`;
    }
}

fetchNews();
