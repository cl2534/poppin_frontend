import React, { Component } from 'react';
import Header from './Header';
import PostContainer from './PostContainer'
export default class StylePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      style: {},
      postsOfStyle: []
    }
  }

  componentDidMount() {
    this.setStyle()
  }

  getStylePosts = (style_id) => {
    fetch(`https://young-waters-32129.herokuapp.com/api/v1/styles/` + this.state.style.id).then(res => res.json()).then(json => {
      this.setState({
        postsOfStyle: json.posts
      })
    })
  }

  setStyle = () => {
    let thisPagesStyleId = window.location.href.split('/').slice(-1)
    fetch('http://localhost:4000/api/v1/styles/' + thisPagesStyleId).then(res => res.json()).then(json => {this.setState({
      style: json
    }); return json.id}).then(id => this.getStylePosts(id))
  }


  renderPosts = () => {
    if (this.state.postsOfStyle.length == 0) {
      return <h2> Sorry, this style does not have any posts associated with it yet! </h2>
    }
    else {
      return <PostContainer posts={this.state.postsOfStyle} renderStyles={false} />
    }
  }


  render() {

    return (
      <div>
      <Header />
      <br />
      <br />
      <h1>{this.state.style.name} </h1>
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
      </div>
    )
  }
}
