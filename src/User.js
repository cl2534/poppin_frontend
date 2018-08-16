import React, {Component} from 'react';


export default class User extends Component{
  // state = {}
  render() {
    return (
      <div className = 'user'>
        <div className='user-name'> Name </div>
        <div className='user-description'> Description <button>Fan</button> </div>
      </div>
    )
  }
}
