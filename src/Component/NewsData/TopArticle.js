import React from 'react';
import './TopArticle.css'

const TopArticle = ({topPost}) => {
    const {title, description, link, pubDate, thumbnail} = topPost
    return (
        <>
            <div className="top_news">
             <h4></h4>
            <a href={link}><h1 className="top__title">{title}</h1></a>
            <p className="top__desc">{description}</p>
            <span className="top__published">{pubDate}</span>
            </div>
        </>
    );
};

export default TopArticle;