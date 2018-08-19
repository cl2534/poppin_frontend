import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylePage extends Component {

  state = {
  ]
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/styles').then(res => res.json()).then(json => this.setState({
      styles: json.styles
    }))
  }

  render() {
    console.log(this.state.styles)
    return (
      <div>
        <Header />
        <br />
        <BoxContainer styles={this.state.styles}/>
      </div>
    )
  }
}
