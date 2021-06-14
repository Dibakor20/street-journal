import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';
import './NewsData.css'

const NewsData = () => {
    
    const [article,setArticle] = useState({});

    useEffect(()=>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%23')
        .then(res=>res.json())
        .then(data=>setArticle(data))
    },[])
    return (
        <>
            <div className="all-news">
                <div>
                {
                    article?.items?.map(blog=><NewsArticle blog={blog}></NewsArticle>)
                }
                </div>
                <div style={{border:"1px solid red"}}>
                    <h1>sadsd</h1>
                </div>
                <div>
                    <h1>dsdsd</h1>
                </div>
                <div>
                    sdsd
                </div>
               
            </div>
        </>
    );
};

export default NewsData;