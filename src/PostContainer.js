import React, {Component} from 'react';
import Post from './Post';

export default class PostContainer extends Component{
  // state = {}
  render() {
    return (
      <div className = 'post-container column'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}
