import React from 'react';
import './NewsArticle.css'

const NewsArticle = ({post}) => {
    const {title, description, link, pubDate, thumbnail} = post
    return (
        <>
            <div className="news">
            <a href={link}><h3 className="news__title">{title}</h3></a>
            <p className="news__desc">{description}</p>
            <span className="news_pub">{pubDate}</span>
            </div>
        </>
    );
};

export default NewsArticle;