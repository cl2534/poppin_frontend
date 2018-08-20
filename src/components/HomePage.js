import React, { Component } from 'react';
import PostContainer from './PostContainer.js';
import SideBar from './SideBar.js';
import Header from './Header.js';
import Adapater from './Adapter.js'
export default class HomePage extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.fetchFiveRecentPosts()

  }

  fetchFiveRecentPosts = () => {
    fetch('http://localhost:4000/api/v1/posts').then(res => res.json()).then(res => this.setState({
      posts: res.posts.slice(Math.max(-5))
    }))
  }



  render() {
    return (
      <div>
        <Header />
        <br />
        <div>
          <PostContainer posts = {this.state.posts}/>
          <SideBar  />
        </div>
      </div>
    )
  }
}
