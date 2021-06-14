import React from 'react'
import './App.css';
import HeadBar from './Component/Header/HeadBar';
import Navbar from './Component/Header/Navbar';
import NewsData from './Component/NewsData/NewsData';

function App() {
  return (
    <>
      <HeadBar/>
      <Navbar/>
      <NewsData/>
    </>
  );
}

export default App;
