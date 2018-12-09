import React from 'react';
import Article from '../Article/Article'

function Articles(props) {
    return (
        <React.Fragment>
            {props.articles.map((x) => {
                return <Article key={x.title} title={x.title} description={x.description}></Article>
            })}
        </React.Fragment>
    )
}

export default Articles;