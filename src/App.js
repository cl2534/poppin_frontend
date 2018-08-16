import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer.js';
import SideBar from './SideBar.js';
import Header from './Header.js';

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
