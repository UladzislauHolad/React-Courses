import React from 'react';
import './Article.css'
import { IArticle } from '../../../models/IArticle';

export interface IArticleProps {
  article: IArticle
}

const Article = (props: IArticleProps) => {
    const { article } = props;

    return (
        <div className="article">
            <a className="link" href={article.url}>
                <h3 className="title">{article.title}</h3>
            </a>
            <img src={article.urlToImage} alt=""></img>
            <p className="description">{article.description}</p>
        </div>
    );
}

export default Article;