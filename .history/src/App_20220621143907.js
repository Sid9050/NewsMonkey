import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News  from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=10
  apiKey=process.env.REACT_APP_NEWS_API
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
        <Route path="/" element={<News  setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
        <Route path="/general" element={<News  setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
        <Route path="/Business" element={<News  setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business"/>}/>
        <Route path="/Entertainment" element={<News  setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
        <Route path="/Health" element={<News  setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
        <Route path="/Technology" element={<News  setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
        <Route path="/Science" element={<News  setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>
        <Route path="/Sports" element={<News  setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
