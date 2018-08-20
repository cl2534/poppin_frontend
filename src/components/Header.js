import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

  // renderUser = () => {
  //   this.props.users.map(user=> )
  // }

  render() {
    return (<nav className="header">
      <Link className='header-element' to="/"> Home </Link>
      <Link className='header-element' to="/MyPage"> My Profile </Link>
      <Link className='header-element' to="/styles"> Explore Styles </Link>
    </nav>)
  }
}
