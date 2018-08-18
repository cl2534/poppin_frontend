import React, { Component } from 'react';
import BoxContainer from './BoxContainer.js'

export default class SideBar extends Component {

  render() {
    return (<div className = "side column">
              <div className="section-title"> Spotlight </div>
              <BoxContainer boxCount="4"/> <br />
              <div className="section-title"> Trending </div>
              <BoxContainer boxCount="6"/> <br />
              <div className="section-title"> Styles </div>
              <BoxContainer boxCount="4"/> <br />
            </div>
    )
  }
}
