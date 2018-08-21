import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'
import Post from './Post'
export default class StylePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stylePosts: []
    }
  }

  componentDidMount() {
    this.getStyles()
  }

  getStyles = (style_id) => {
    fetch(`http://localhost:4000/api/v1/styles/${style_id}`).then(res => res.json()).then(json => {
      this.setState({
        stylePosts: json.posts
      })
    })
  }


  renderPosts = () => {
    return this.state.stylePosts.map(post => {
      return (
      <Post post={post} key={post.id}/>
    )}
    )
  }


  render() {
    return (
      <div>
      <Header />
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
      </div>
    )
  }
}
