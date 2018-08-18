import React, {Component} from 'react';
import Header from './Header';
import PostContainer from './PostContainer';
import AboutMe from './AboutMe';

export default class UserPage extends Component {

  render() {
    return (
          <div>
            <Header />
            <br />
            <div >
              <AboutMe />
              <br />
              <h2> Recent Posts </h2>
              <PostContainer />
            </div>
          </div>
        )
  }
}
