import React, { Component } from 'react';
import BoxContainer from './BoxContainer.js'

export default class SideBar extends Component {

  state = {
    styles: []
  }

  componentDidMount() {
    this.fetchRandomStyles()
  }

  fetchRandomStyles = () => {
    fetch('http://localhost:4000/api/v1/styles').then(res => res.json()).then(json => {this.setState({
      styles: json.styles
    }); console.log(json.styles);})
  }

  giveRandomStyles = (amountOfStyles) => {
    console.log(this.state.styles);
    if (this.state.styles.length === 0) {
      console.log('check');
      return []
    }

    let returnArray = []
    let counter = 0
    while (counter < amountOfStyles) {
      returnArray.push(this.state.styles[Math.floor(Math.random() * this.state.styles.length)])
      counter++
    }
    return returnArray
  }


  render() {
    return (<div className = "side column">
              <div className="section-title"> Spotlight </div>
              <BoxContainer styles={this.giveRandomStyles(4)}/> <br />
              <div className="section-title"> Trending </div>
              <BoxContainer styles={this.giveRandomStyles(4)}/> <br />
              <div className="section-title"> Styles </div>
              <BoxContainer styles={this.giveRandomStyles(4)}/> <br />
            </div>
    )
  }
}
