import React, { Component } from 'react';
import BoxContainer from './BoxContainer.js'
//this is the sidebar on the main page.
export default class SideBar extends Component {

  state = {
    styles: []
  }

  componentDidMount() {
    this.fetchRandomStyles()
  }
  //grabs random styles to populate the front page with from the backend
  fetchRandomStyles = () => {
    fetch('https://young-waters-32129.herokuapp.com/api/v1/styles').then(res => res.json()).then(json => {this.setState({
      styles: json.styles
    }); console.log(json.styles);})
  }

  //takes in an integer n, outputs n styles to be given to a BoxContainer.
  giveRandomStyles = (amountOfStyles) => {
    if (this.state.styles.length === 0) {
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
    return (<div className = "side column side-bar">
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
