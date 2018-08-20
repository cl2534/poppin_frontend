import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPostStyles : [],
      allPosts: [],
      thatStylePosts: []
    }
  }

  componentDidMount() {
    this.getPostStyle();
    this.getAllPosts();
    this.filterPosts();
  }

  getPostStyle = () => {
    fetch('http://localhost:4000/api/v1/post_styles').then(res => res.json()).then(json => {
      this.setState({
        currentPostStyles: json.poststyles.filter(poststyle => poststyle.style_id === 1)
      })
    })
  }

  getAllPosts = () => {
    fetch('http://localhost:4000/api/v1/posts').then(res => res.json()).then(res => {
      this.setState({
        allPosts: res.posts
      })
    })
  }

    filterPosts = () => {
      let resultArray = []
      for (let i = 0; i < this.state.currentPostStyles.length; i++) {
        for (let j = 0; j < this.state.allPosts.length; j++) {
          if (this.state.currentPostStyles[i].post_id === this.state.allPosts[j].id) {
            resultArray.push(this.state.allPosts[i])
          }
        }
      }
      this.setState = {
        ...this.state.allPosts,
        ...this.state.currentPostStyles,
        thatStylePosts: resultArray
      }
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
