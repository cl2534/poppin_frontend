import React, { Component } from 'react';

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="boxxy">
      <img src={this.props.style.style_pic_link} height="200" width="200"/>
      <div className="center-text"> {this.props.style.name} </div>
    </div>)
  }
}
