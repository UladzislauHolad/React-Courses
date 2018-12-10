import React from 'react';
import Article from './Article';

function Articles(props) {
    return (
        <React.Fragment>
            {props.articles.map((article) => {
                return <Article key={article.title} article={article}></Article>
            })}
        </React.Fragment>
    )
}

export default Articles;