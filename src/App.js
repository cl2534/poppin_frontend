import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './Components/PostContainer';
import SideBar from './Components/SideBar';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="app">
          <PostContainer />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
