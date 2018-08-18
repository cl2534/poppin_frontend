import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    return (<nav className="header">
      <a href="http://localhost:3000/">Home </a>
      <a href="http://localhost:3000/mypage">User </a>
      <a href="http://localhost:3000/styles">Styles </a>
    </nav>)
  }
}
