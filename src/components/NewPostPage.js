import React, { Component } from 'react';
import Header from './Header';

export default class NewPostPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
        user_id: props.userId,
        name: "",
        picture_url: "",
        location: "",
        articles: ""
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...this.state, likes: 0})
    }).then(res => res.json()).then(json => this.props.history.push('/'))
  }

  render() {
    return (
      <div className="form-contianer">
        <Header />
        <br />
        <div className="create-post-form">
          <form onSubmit={this.handleSubmit}>
            <label>Post Title: </label>
            <input type="text" name="name" size="80" value={this.state.name} onChange={this.handleChange}/>
            <br />
            <label>Post Location: </label>
            <input type="text" name="location" size="75" value={this.state.location} onChange={this.handleChange}/>
            <br />
            <label>Post Image URL: </label>
            <input type="text" name="picture_url" size="73" value={this.state.picture_url} onChange={this.handleChange}/>
            <br />
            <label>Outfit Articles (optional): </label>
            <input type="text" name="articles" size="60" value={this.state.articles} onChange={this.handleChange}/>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
