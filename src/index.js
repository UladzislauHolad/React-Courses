import NewsService from './services/news.service.js';
import Header from './components/header.js';
import NewsContainer from './components/newsContainer.js';

(function(){
    const btns = [
        'Sport',
        'Art', 
        'Cars',
        'Film'
    ];

    const newsContainer = new NewsContainer('news-container');
    const loader = document.getElementById('loader');

    new Header('header', btns, (e) => {
        loader.hidden=false;
        NewsService.get(e.target.id)
            .then(json => {
                newsContainer.init(json);
                loader.hidden = true;
            })
    });



})();