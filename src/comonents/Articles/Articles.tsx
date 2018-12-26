import React from 'react';
import Article from './Article';
import { IArticle } from '../../models/IArticle';


export interface IArticlesProps {
  articles: IArticle[]
}

const Articles = (props: IArticlesProps) => {
  const { articles } = props;

  return (
    <React.Fragment>
      {articles.map((article) => {
        return <Article key={article.title} article={article}></Article>
      })}
    </React.Fragment>
  )
}


export default Articles;