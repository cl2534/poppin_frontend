import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class User extends Component{
  // state = {}
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount(props) {
    this.fetchUser(this.props.userId)
  }

  // createUser = () => {
  //     let bodyJSON = {name: "Chang", profile_img_link: 'www.flatironschool.com'}
  //     fetch(`http://localhost:4000/api/v1/users`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(bodyJSON),
  //     }).then(res => res.json()).then(data => this.setState({
  //       users: data.users
  //     }))
  //   //   then(data => this.setState({
  //   //     name: data.name
  //   //     profile_img_link: data.profile_img_link
  //   //   }));
  //   // // our backend responds with the updated note instance represented as JSON
  // }



  fetchUser = (user_id) => {
    fetch(`http://localhost:4000/api/v1/users/${user_id}`).then(res => res.json()).then(res => this.setState({
      currentUser: res.user
    }))
  }


  render() {
    return (
      <div className = 'user'>
        <img className ='user-text avatar'alt="" src={this.state.currentUser.profile_img_link} height="75" width="75"/>
        <div>
          <Link className='user-text user-name' to={"/user/" + this.state.currentUser.id} params={{userId: this.state.currentUser.id}}> {this.state.currentUser.name} </Link>
          <br />
          <br />
          <div className='user-text user-description'> {this.state.currentUser.about_me} <button>Fan</button> </div>
        </div>
      </div>
    )
  }
}
