import React, { Component } from 'react';

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="boxxy">
      <img className="style-image" src={this.props.style.style_pic_link} height="200" width="200" alt="" onClick = {this.props.handleClick(this.props.id)}/>
      <div className="center-text"> {this.props.style.name}  </div>
    </div>)
  }
}
