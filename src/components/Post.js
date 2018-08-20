import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
  // state = {}
  constructor(props) {
    super(props)
  }

  handleLikeClick = () => {
    fetch('http://localhost:4000/api/v1/posts/' + this.props.post.id, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({likes: this.props.post.likes++})
    })
  }


  render() {
    return (

      <div className = 'post'>
        <div>
          <User userId = {this.props.post.user_id}/>
        </div>
        <div className="post-title"> {this.props.post.name} </div>
        <div className="post-address"> {this.props.post.location} </div>
        <img src ={this.props.post.picture_url}/>
        <br />
        <button className="post-button"> Save </button>
        <button className="post-button" onClick={this.handleLikeClick}> Likes: {this.props.post.likes} </button>

      </div>
    )
  }
}
