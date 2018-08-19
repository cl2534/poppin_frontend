import React, {Component} from 'react';
import Header from './Header';
import PostContainer from './PostContainer';
import AboutMe from './AboutMe';

export default class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.fetchUsers()
    // this.fetchUsers()
  }

  fetchUsers = () => {
    fetch('http://localhost:4000/api/v1/users').then(res => res.json()).then(res => this.setState({
      users: res.users
    }))
  }

  render() {
    return (
          <div>
            <Header />
            <br />
            <div >
              <AboutMe />
              <br />
              <h2> Recent Posts </h2>
              <PostContainer user = {this.state.users[0]} />
            </div>
          </div>
        )
  }
}
