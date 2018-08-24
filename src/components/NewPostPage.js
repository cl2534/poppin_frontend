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
    fetch('https://young-waters-32129.herokuapp.com/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...this.state, likes: 0})
    }).then(res => res.json()).then(json => this.props.history.push('/'))
  }

  render() {
    return (
      <div className="form-container black">
        <Header />
        <br />
        <div className="create-post-form">
          <form onSubmit={this.handleSubmit}>
            <label>Post Title: </label> <br />
            <input type="text" name="name" size="73" value={this.state.name} onChange={this.handleChange} maxlength="100"/>
            <br /> <br />
            <label>Post Location: </label> <br />
            <input type="text" name="location" size="73" value={this.state.location} onChange={this.handleChange} maxlength="30"/>
            <br /> <br />
            <label>Post Image URL: </label> <br />
            <input type="URL" name="picture_url" size="73" value={this.state.picture_url} onChange={this.handleChange} maxlength="200"/>
            <br /> <br />
            <label>Outfit Articles (optional): </label> <br />
            <input type="text" name="articles" size="73" value={this.state.articles} onChange={this.handleChange} maxlength="140"/>
            <br /> <br />
            <input type="submit" bsStyle="info" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
