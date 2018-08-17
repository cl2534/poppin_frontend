import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    return (<nav className="header">
      <a href="#home">Home </a>
      <a href="#explore">Explore </a>
      <a href="#home">Feed </a>
    </nav>)
  }
}
