import React, {Component} from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

  // renderUser = () => {
  //   this.props.users.map(user=> )
  // }

  render() {
    return (<nav className="header">
      <a href="http://localhost:3000/">Home </a>
      <a href="http://localhost:3000/MyPage"> User </a>
      <a href="http://localhost:3000/styles">Styles </a>
    </nav>)
  }
}
