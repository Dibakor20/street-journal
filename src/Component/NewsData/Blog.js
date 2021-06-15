import React from 'react';
import './Blog.css'
import img from '../../blogImg.jpg'

const Blog = ({news}) => {
    const {title , pubDate, image, link} = news
    return (
        <>
            <div className="blog">
            <img src={img} alt="" className="blog_img" />
            <a href={link}>  <h1 className="news__title">{title}</h1></a>
            <span className="news__published">{pubDate}</span>
            </div>
        </>
    );
};

export default Blog;