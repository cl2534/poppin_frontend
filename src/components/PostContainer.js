import React, {Component} from 'react';
import Post from './Post';
//container class for posts

export default class PostContainer extends Component{
  constructor(props) {
    super(props)
  }

//renders post components. maps through the posts passed in via props.
  renderPosts = () => {
    return this.props.posts.map(post => {
      return (
      <Post post={post} key={post.id} renderStyles={this.props.renderStyles}/>
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
//default props for the component, so the application doesn't crash if it doesnt have any.
PostContainer.defaultProps = {
  posts: [],
  renderStyles: true
}
