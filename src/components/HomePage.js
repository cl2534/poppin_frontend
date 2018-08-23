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
    fetch('https://young-waters-32129.herokuapp.com/api/v1/posts').then(res => res.json()).then(res => this.setState({
      posts: res.posts.slice(Math.max(-5))
    }))
  }



  render() {
    return (
      <div className="black">
        <Header />
        <br />
        <div className="flex-container">
          <PostContainer posts = {this.state.posts}/>
          <SideBar  />
        </div>
      </div>
    )
  }
}
