class NewsContainer {
    constructor(containerId) {
        this._newsContainer = document.getElementById(containerId);
    }

    init(data) {
        this.clear();
        data.articles.forEach(article => {
            let news = this.createNews(article);
            this._newsContainer.appendChild(news);
        });
    }
    
    clear() {
        while (this._newsContainer.firstChild) {
            this._newsContainer.removeChild(this._newsContainer.firstChild);
        }
    }

    createNews(newsData) {
        let news = document.createElement('div');
        news.setAttribute('class', 'news');
        
        let a = document.createElement('a');
        a.setAttribute('href', newsData.url);
        let title = this.createNewsPart('h3', 'news-title', newsData.title);
        a.appendChild(title);

        let description = this.createNewsPart('p', 'news-description', newsData.description);

        let img = document.createElement('img');
        img.setAttribute('src', newsData.urlToImage);
        
        news.appendChild(a);
        news.appendChild(img);
        news.appendChild(description);

        return news;
    }

    createNewsPart(tag, classname, text) {
        let part = document.createElement(tag);
        part.setAttribute('class', classname);
        part.appendChild(document.createTextNode(text));

        return part;
    }
}

export default NewsContainer;