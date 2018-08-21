import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stylePosts: []
    }
  }

  componentDidMount() {
    this.getStyles()
  }

  getStyles = (style_id) => {
    fetch(`http://localhost:4000/api/v1/styles/${style_id}`).then(res => res.json()).then(json => {
      this.setState({
        stylePosts: json.posts
      })
    })
  }




  render() {
    console.log(this.state)
    return (
      <div>
      <Header />
        Style Page
        <br />
      </div>
    )
  }
}
