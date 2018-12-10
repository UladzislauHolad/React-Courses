import React from 'react';
import './Article.css'

function Article(props) {
    return (
        <div className="article">
            <a className="link" href={props.article.url}>
                <h3 className="title">{props.article.title}</h3>
            </a>
            <img src={props.article.urlToImage} alt=""></img>
            <p className="description">{props.article.description}</p>
        </div>
    );
}

export default Article;