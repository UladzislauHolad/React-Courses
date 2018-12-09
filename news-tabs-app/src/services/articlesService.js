const sport = [
    {title: 'sport1', description: 'desc1', link: '#'},
    {title: 'sport2', description: 'desc2'},
    {title: 'sport3', description: 'desc3'},
    {title: 'sport41', description: 'desc4'}
];

const art = [
    {title: 'art1', description: 'desc1'},
    {title: 'art2', description: 'desc2'},
    {title: 'art3', description: 'desc3'},
    {title: 'art41', description: 'desc4'}
];

const auto = [
    {title: 'auto1', description: 'desc1'},
    {title: 'auto2', description: 'desc2'},
    {title: 'auto3', description: 'desc3'},
    {title: 'auto41', description: 'desc4'}
];



function getArticles(query) {
    let articles;
    if(query === 'sport') articles = sport;
    if(query === 'art') articles = art;
    if(query === 'auto') articles = auto;
    
    return Promise.resolve(articles);
}

export {getArticles};