import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';
import Blog from './Blog';
import './NewsData.css'

const NewsData = () => {
    
    const [article,setArticle] = useState({});
    const [blog,setBlog] = useState({})

    useEffect(()=>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%23')
        .then(res=>res.json())
        .then(data=>setArticle(data))
    },[])

    useEffect(()=>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%3Fhl%3Den-US%26gl%3DUS%26ceid%3DUS%3Aen')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])

    return (
        <>
            <div className="row all_news">
                <div className="col-3 news_article">
                {
                    article?.items?.map(post=><NewsArticle post={post}></NewsArticle>)
                }
                </div>
                <div className="col-4 main_topic">
                    <h1>sadsd</h1>
                </div>
                <div className="col-2 blog_section mb-5">
                {
                    blog?.items?.slice(0,8).map(news=> <Blog news={news}></Blog>)
                }
                </div>
                <div className="col-3">
                    sdsd
                </div>
               
            </div>
        </>
    );
};

export default NewsData;