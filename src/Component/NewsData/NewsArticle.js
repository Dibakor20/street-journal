import React from 'react';
import './NewsArticle.css'

const NewsArticle = ({post}) => {
    const {title, description, link, pubDate, thumbnail} = post
    return (
        <>
            <div className="news">
            <a href={link}><h3 className="news__title">{title}</h3></a>
            <p className="news__desc">{description}</p>
            <p className="news_pub">{pubDate}</p>
            </div>
        </>
    );
};

export default NewsArticle;