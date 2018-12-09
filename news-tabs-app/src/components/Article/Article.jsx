import React from 'react';
import './Article.css'

function Article(props) {
    return (
        <div className="article">
            <img src={props.img} alt=""></img>
            <a className="link" href={props.link ? props.link : '#'}>
                <h3 className="title">{props.title}</h3>
            </a>
            <p className="description">{props.description}</p>
        </div>
    );
}

export default Article;