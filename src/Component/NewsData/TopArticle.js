import React from 'react';
import './TopArticle.css'

const TopArticle = ({topPost}) => {
    const {title, description, link, pubDate, thumbnail} = topPost
    return (
        <>
            <div className="top__news">
             <h4></h4>
            <a href={link}><h3 className="top__title">{title}</h3></a>
            <hr className='top__news__line' style={{display:'none'}}/>
            <p className="top__desc">{description}</p>
            <span className="top__pub">{pubDate}</span>
            </div>
        </>
    );
};

export default TopArticle;