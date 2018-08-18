import React, { Component } from 'react';
import PostContainer from './PostContainer.js';
import SideBar from './SideBar.js';
import Header from './Header.js';

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        <div>
          <PostContainer />
          <SideBar />
        </div>
      </div>
    )
  }
}
