const url = 'https://newsapi.org/v2/everything';
const API_KEY = '2a527d3a8ec34f62b78c5951fb9f6129';

function getArticles(query: string) {
    return fetch(`${url}?q=${query}&apiKey=${API_KEY}`).then((response) => {
        return response.json();
    })
}

export {getArticles};