import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
  // state = {}
  constructor(props) {
    super(props)
  }


  render() {
    return (

      <div className = 'post'>
        <div>
          <User userId = {this.props.post.user_id}/>
        </div>
        <div className="post-title"> {this.props.post.name} </div>
        <div className="post-address"> {this.props.post.location} </div>
        <img src ={this.props.post.picture_url} width = '400' height = '400' />
        <br />
        <button className="post-button"> Save </button>
        <button className="post-button"> Upvote </button>

      </div>
    )
  }
}
