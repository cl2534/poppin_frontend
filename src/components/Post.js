import React, {Component} from 'react';
import User from './User';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

  generateLikeButton = () => {
    if (!this.state.likedAlready) {
      return <Button bsStyle="danger" className="right-list like-button" onClick={this.handleLikeClick}> Likes: {this.props.post.likes} </Button>
    }
    else {
      return <Button bsStyle="danger" className="right-list like-button" onClick={this.handleLikeClick} disabled> Likes: {this.props.post.likes} </Button>
    }
  }

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
