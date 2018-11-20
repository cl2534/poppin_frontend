import React, {Component} from 'react';
import User from './User';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Post extends Component{
  constructor(props) {
    super(props)
//initial state takes in the amount of likes the post has, and whether or not
//the like button has been pressed already. if its been pressed, it will disable
//the like button.
    this.state = {
      likes: props.post.likes,
      likedAlready: false
    }
  }

//event listener for pressing the like button. submits a patch request to the backend.
  handleLikeClick = () => {
    fetch('https://young-waters-32129.herokuapp.com/api/v1/posts/' + this.props.post.id, {
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

//renders the like button. this button is rerendered whenever it is pushed.
  generateLikeButton = () => {
    if (!this.state.likedAlready) {
      return <Button bsStyle="danger" className="right-list like-button" onClick={this.handleLikeClick}> Likes: {this.props.post.likes} </Button>
    }
    else {
      return <Button bsStyle="danger" className="right-list like-button" onClick={this.handleLikeClick} disabled> Likes: {this.props.post.likes} </Button>
    }
  }

//renders an unordered list of associated clothing articles of the post if they exist.
  generateArticles = () => {
    if (this.props.post.articles.length == 0) {
      return null
    }
    else {
      let articleArray = this.props.post.articles.split(",")
      let returnArray = []
      for (let article in articleArray) {
        returnArray.push(<li> {articleArray[article]} </li>)
      }
      return <ul className="right-list">Listed Clothing: {returnArray} </ul>
    }
  }

//renders an unordered list of links to the styles associated with the post if they exist.
  generateStyles = () => {
    if (this.props.renderStyles) {
      if (this.props.post.styles.length == 0) {
        return null
      }
      else {
        let returnArray = []
        for (let style in this.props.post.styles) {
          returnArray.push(<Link className="style-text" to={"/style/" + this.props.post.styles[style].id}> <li> {this.props.post.styles[style].name} </li> </Link>)
        }
        return <ul className="right-list">Associated Styles: {returnArray} </ul>
      }
    }
  }


  render() {
    return (

      <div className = 'post'>
        <div className = 'post-inner'>
          <div className="flex-container">
            <User className="user-blurb" userId = {this.props.post.user_id} />
            {this.generateLikeButton()}
          </div>
          {this.generateArticles()}
          {this.generateStyles()}
          <div>
            <div className="post-title"> {this.props.post.name} </div>
            <div className="post-address"> {this.props.post.location} </div>
            <img src ={this.props.post.picture_url}/>
            <br />
          </div>
        </div>
      </div>
    )
  }
}
