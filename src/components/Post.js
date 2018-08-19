import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
  // state = {}
  render() {
    return (

      <div className = 'post'>
        <User />
        <div className="post-title"> Insert post title here </div>
        <img src ='https://vignette.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110' width = '400' height = '400' alt="" />
        <button className="post-button"> Save </button>
        <button className="post-button"> Upvote </button>

      </div>
    )
  }
}
