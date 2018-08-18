import React, { Component } from 'react';

export default class AboutMe extends Component {

  render() {
    return (
      <div className="about-me">
        <div>
          <h1> Changmin Lim </h1>
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18403265_10208991844731246_700286398823467789_n.jpg?_nc_cat=0&oh=bad6b60c50624f0519dab820a8930ab8&oe=5C12056B" height="250" width="250" />
        </div>
        <div>
          <h2> About Me </h2>
          <p> Student at NYU and Flatiron School </p>
          <p> IG: @littboi5000 </p>
          <p> Facebook: facebook.com/littyboi </p>
        </div>
      </div>
    )
  }
}
