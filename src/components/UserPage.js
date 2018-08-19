import React, {Component} from 'react';
import Header from './Header';
import PostContainer from './PostContainer';
import AboutMe from './AboutMe';

export default class UserPage extends Component {

  state = {
    currentUser: {}
  }

  setUser = () => {
    fetch('http://localhost:4000/api/v1/users/2').then(res => res.json()).then(json => this.setState({
      currentUser: json.user
    }))
  }

  componentDidMount() {
    this.setUser()
  }

  render() {
    return (
          <div>
            <Header />
            <br />
            <div >
              <AboutMe user={this.state.currentUser}/>
              <br />
              <PostContainer />
            </div>
          </div>
        )
  }
}
