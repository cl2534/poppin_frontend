import React, { Component } from 'react';

export default class AboutMe extends Component {

  constructor(props) {
    super(props)
  }

  //this method checks to see if the associated user has social media attached
  //to their profile. If they do, its rendered, if not, nothing is displayed.
  generateSocialMedia = () => {
    let returnElements = []

    if (this.props.user.instagram_username !== "") {
      returnElements.push(<div className="social-media-icon" key={this.props.user.instagram_username}> <img src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png" width="25" height="25" alt=""/> @{this.props.user.instagram_username} </div>)
    }

    if (this.props.user.facebook_url !== "") {
      returnElements.push(<div className="social-media-icon" key={this.props.user.facebook_url}> <img src="https://image.flaticon.com/icons/png/512/69/69407.png" width="25" height="25" alt=""/> {this.props.user.facebook_url} </div>)
    }

    return returnElements
  }

  //this Component is displayed in the Userpage, and is a small box that includes
  //the user's name, about me, and image.
  render() {
    return (
      <div className="about-me">
        <div>
          <h1> {this.props.user.name} </h1>
          <img src={this.props.user.profile_img_link} height="250" width="250" />
        </div>
        <div>
          <p> {this.props.user.address} </p>
          <p> {this.props.user.about_me} </p>
          {this.generateSocialMedia()}
        </div>
      </div>
    )
  }
}
