import React, { Component } from 'react';
import BoxContainer from './BoxContainer.js'

export default class SideBar extends Component {

  render() {
    return (<div className = "side column">
              <div className="section-title"> Spotlight </div>
              <BoxContainer /> <br />
              <div className="section-title"> Trending </div>
              <BoxContainer /> <br />
              <div className="section-title"> Styles </div>
              <BoxContainer /> <br />
            </div>
    )
  }
}
