import React, { Component } from 'react';

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="boxxy">
      <img src="https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354" height="200" width="200"/>
      <div className="center-text"> {this.props.style.name} </div>
    </div>)
  }
}
