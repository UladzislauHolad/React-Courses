const url = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function getArticles(query: string) {
  return fetch(`${url}?q=${query}&apiKey=${API_KEY}`).then((response) => {
    return response.json();
  })
}


export { getArticles };