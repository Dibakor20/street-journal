import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';
import TopArticle from './TopArticle';
import Blog from './Blog';
import NewsStatistics from '../NewsStatistics/NewsStatistics';
import './NewsData.css'

const NewsData = () => {

    const [article, setArticle] = useState({});
    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%23')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%3Fhl%3Den-US%26gl%3DUS%26ceid%3DUS%3Aen')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className='news_main_section'>
            <div className=" all_news">
                <div className="top_news">
                    {
                        article?.items?.slice(0, 5).map(post => <NewsArticle post={post}></NewsArticle>)
                    }
                </div>
                <div className=" main_topic">
                    {
                        article?.items?.slice(6, 10).map(topPost => <TopArticle topPost={topPost}></TopArticle>)
                    }
                </div>
                <div className=" blog_section mb-5">
                    {
                        blog?.items?.slice(0, 4).map(news => <Blog news={news}></Blog>)
                    }
                </div>
                <div className="">
                    <NewsStatistics></NewsStatistics>
                </div>

            </div>
        </div >
    );
};

export default NewsData;