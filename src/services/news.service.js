const url = 'https://newsapi.org/v2/everything';//q=sport&apiKey=';
const API_KEY = '2a527d3a8ec34f62b78c5951fb9f6129';

class NewsService {
    static get(query) {
        return fetch(`${url}?q=${query}&apiKey=${API_KEY}`).then((response) => {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
    }    
}

export default NewsService;