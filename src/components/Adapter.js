
import React, {Component} from 'react'

export default class Adapter extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      name: '',
      profile_img_link: ''
    }
  }

  sayHi = () => {
    console.log('hi')
  }

  updateScore = () => {
    let bodyJSON = {name: "Sang", profile_img_link: 'wded'}
    fetch(`http://localhost:3000/api/v1/users/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      }).then(res => res.json()).then(updatedNote => console.log(updatedNote));
        // our backend responds with the updated note instance represented as JSON
      };

    createUser = () => {
        let bodyJSON = {name: "Chang", profile_img_link: 'www.flatironschool.com'}
        fetch(`http://localhost:3000/api/v1/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(bodyJSON),
        }).then(res => res.json()).then(data => console.log(data))
      //   then(data => this.setState({
      //     name: data.name
      //     profile_img_link: data.profile_img_link
      //   }));
      // // our backend responds with the updated note instance represented as JSON
    }

  fetchUsers = () => {
    fetch(`http://localhost:3000/api/v1/users`).then(res => res.json()).then(data => console.log(data));
        // our backend responds with the updated note instance represented as JSON
  }
}
