import './App.css';

import React, { Component } from 'react'
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
  const
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:this.state.progress})
  }
  render() {
    return (
      <BrowserRouter>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <div>
        
        <Routes>
        <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
        <Route path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
        <Route path="/Business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business"/>}/>
        <Route path="/Entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
        <Route path="/Health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
        <Route path="/Technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
        <Route path="/Science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>
        <Route path="/Sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
