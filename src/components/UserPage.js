import React, {Component} from 'react';
import Header from './Header';
import PostContainer from './PostContainer';
import AboutMe from './AboutMe';

export default class UserPage extends Component {

  state = {
    currentUser: {},
    userPosts: []
  }

  setUser = () => {
    fetch('http://localhost:4000/api/v1/users/1').then(res => res.json()).then(json => {this.setState({
      currentUser: json.user
    }); return json.user.id}).then(user_id => this.setPosts(user_id))
  }

  setPosts = (id) => {
    fetch('http://localhost:4000/api/v1/posts').then(res => res.json()).then(json => this.setState({
      userPosts: json.posts.filter(post => post.user_id === id)
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
              <PostContainer posts={this.state.userPosts}/>
            </div>
          </div>
        )
  }
}
