import React from 'react';
import './Blog.css'
import img from '../../images/b.jpg'

const Blog = ({ news }) => {
    const { title, pubDate, image, link } = news
    return (

        <div className="blog">
            <img src={img} alt="" className="blog_img mb-2" />
            <a href={link}>  <h3 className="blog__title">{title}</h3></a>
            <span className="blog__published">{pubDate}</span>
        </div>

    );
};

export default Blog;