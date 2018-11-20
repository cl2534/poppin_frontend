import React, { Component } from 'react';
import PostContainer from './PostContainer.js';
import SideBar from './SideBar.js';
import Header from './Header.js';
export default class HomePage extends Component {

  state = {
    posts: []
  }

//The homepage doesn't make an API call until it's been rendered.
  componentDidMount() {
    this.fetchFiveRecentPosts()
  }
//API call that takes the last 5 created posts.
  fetchFiveRecentPosts = () => {
    fetch('https://young-waters-32129.herokuapp.com/api/v1/posts').then(res => res.json()).then(res => this.setState({
      posts: res.posts.slice(Math.max(-5))
    }))
  }


//renders a post container containing the five posts grabbed from the backend
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
