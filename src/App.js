import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import UserPage from './components/UserPage.js';
import StylesPage from './components/StylesPage.js';
import NewPostPage from './components/NewPostPage.js';
import StylePage from './components/StylePage.js';
class App extends Component {

  state = {
    loggedInUserId: 5
  }


  render() {
    return (
      <BrowserRouter>
        <div className="col-container">
          <Route path="" component={HomePage} exact/>
          <Route path="/styles" component={StylesPage} exact/>
          <Route path="/MyPage" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} exact/>
          <Route path="/user" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} />
          <Route path="/new-post" render={(props) => <NewPostPage {...props} userId={this.state.loggedInUserId} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
App - HomePage  - SideBar -BoxContainer - Box
                - PostContainer - Post - UserBlurb
    - UserPage  - PostContainer - Post - UserBlurb
    - StylesPage -BoxContainer - Box
    - StylePage - PostContainer -Post - UserBlurb

    */
