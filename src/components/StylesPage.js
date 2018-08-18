import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylesPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        <BoxContainer boxCount="6"/>
        <BoxContainer boxCount="6"/>
        <BoxContainer boxCount="6"/>
        <BoxContainer boxCount="6"/>
        <BoxContainer boxCount="6"/>
      </div>
    )
  }
}
