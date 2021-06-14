import React from 'react';
import './NewsArticle.css'

const NewsArticle = ({blog}) => {
    console.log(blog)
    const {title, description, link, pubDate, thumbnail} = blog
    return (
        <>
            <div className="news">
            <h1 className="news__title">{title}</h1>
            <p className="news__desc">{description}</p>
            <span className="news__published">{pubDate}</span>
            </div>
        </>
    );
};

export default NewsArticle;