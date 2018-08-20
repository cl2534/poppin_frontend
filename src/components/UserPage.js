import React, {Component} from 'react';
import Header from './Header';
import PostContainer from './PostContainer';
import AboutMe from './AboutMe';

export default class UserPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: {},
      userPosts: []
    }
  }


  setUser = () => {
    if (window.location.href.includes("MyPage")) {
      fetch('http://localhost:4000/api/v1/users/' + this.props.userId).then(res => res.json()).then(json => {this.setState({
        currentUser: json.user
      }); return json.user.id}).then(user_id => this.setPosts(user_id))
    }
    else {
      let otherUserOnNetworkId = window.location.href.split('/').slice(-1)
      console.log(otherUserOnNetworkId);
      fetch('http://localhost:4000/api/v1/users/' + otherUserOnNetworkId).then(res => res.json()).then(json => {this.setState({
        currentUser: json.user
      }); return json.user.id}).then(user_id => this.setPosts(user_id))
    }
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
    console.log(window.location.href)
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
