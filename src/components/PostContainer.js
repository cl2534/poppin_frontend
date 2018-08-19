import React, {Component} from 'react';
import Post from './Post';

export default class PostContainer extends Component{
  constructor(props) {
    super(props)
  }

  renderPosts = () => {
    return this.props.posts.map(post => {
      return (
      <Post post={post} key={post.id}/>
    )}
    )
  }


  render() {
    return (
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
    )
  }
}
