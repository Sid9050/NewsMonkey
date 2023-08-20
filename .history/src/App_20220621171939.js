import './App.css';

import React, { Component, useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App =()=>{
  pageSize=6
  apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)

  render() {
    return (
      <BrowserRouter>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <div>
        
        <Routes>
        <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General"/>}/>
        <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General"/>}/>
        <Route path="/Business" element={<News apiKey={apiKey} setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category="Business"/>}/>
        <Route path="/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}/>
        <Route path="/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health"/>}/>
        <Route path="/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology"/>}/>
        <Route path="/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science"/>}/>
        <Route path="/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
