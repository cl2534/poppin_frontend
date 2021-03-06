import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylesPage extends Component {

  state = {
    styles: []
  }

//only calls backend after rendering, to avoid unnecessary calls.
  componentDidMount() {
    fetch('https://young-waters-32129.herokuapp.com/api/v1/styles').then(res => res.json()).then(json => this.setState({
      styles: json.styles
    }))
  }

  render() {
    return (
      <div className="black">
        <Header />
        <br />
        <div className="center-this-box">
          <BoxContainer styles={this.state.styles}/>
        </div>
      </div>
    )
  }
}
