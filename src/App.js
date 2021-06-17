import React from 'react'
import './App.css';
import HeadBar from './Component/Header/HeadBar';
import NewsData from './Component/NewsData/NewsData';

function App() {
  return (
    <>
    <div className=""> 
      <HeadBar/>
      </div>
      <div className="container">
      <NewsData/>
    </div>
    </>
  );
}

export default App;
