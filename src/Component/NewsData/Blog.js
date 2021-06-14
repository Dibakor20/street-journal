import React from 'react';
import './Blog.css'
import img from '../../blogImg.jpg'

const Blog = ({news}) => {
    const {title , pubDate, image} = news
    return (
        <>
            <div className="blog">
                <img src={img} alt="" className="blog_img" />
            <h1 className="news__title">{title}</h1>
            {/* <p className="news__desc">{description}</p> */}
            <span className="news__published">{pubDate}</span>
            </div>
        </>
    );
};

export default Blog;