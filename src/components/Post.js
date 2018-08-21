import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
  // state = {}
  constructor(props) {
    super(props)

    this.state = {
      likes: props.post.likes,
      likedAlready: false
    }
  }

  handleLikeClick = () => {
    console.log(this.props.post.likes, "u just liked tho!")
    fetch('http://localhost:4000/api/v1/posts/' + this.props.post.id, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({likes: this.props.post.likes + 1})
    }).then(res => res.json()).then(json => this.setState({
      likes: this.props.post.likes++,
      likedAlready: true
    }))
  }

  generateLikeButton = () => {
    if (!this.state.likedAlready) {
      return <button className="post-button" onClick={this.handleLikeClick}> Likes: {this.props.post.likes} </button>
    }
    else {
      return <button className="post-button" onClick={this.handleLikeClick} disabled> Likes: {this.props.post.likes} </button>
    }
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
        {this.generateLikeButton()}

      </div>
    )
  }
}
