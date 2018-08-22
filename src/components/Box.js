import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (<div className="boxxy">
      <Link to={"/style/" + this.props.style.id} >
        <img className="style-image" src={this.props.style.style_pic_link} height="200" width="200" alt="" onClick = {this.props.handleClick(this.props.id)}/>
        <div className="center-text"> {this.props.style.name}  </div>
      </Link>
    </div>)
  }
}
