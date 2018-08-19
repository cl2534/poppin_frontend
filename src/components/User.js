import React, {Component} from 'react';


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
    console.log(this.state.currentUser.name)
    return (
      <div className = 'user'>
        <div className='user-name'> {this.state.currentUser.name} </div>
        <div className='user-description'> Description <button>Fan</button> </div>
      </div>
    )
  }
}
