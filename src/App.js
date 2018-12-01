import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import UserPage from './components/UserPage.js';
import StylesPage from './components/StylesPage.js';
import NewPostPage from './components/NewPostPage.js';
import StylePage from './components/StylePage.js';
class App extends Component {

//This is where the logged in user is stored.
  state = {
    loggedInUserId: 1
  }


//This is the main application component. The Routes render different components
//based on the change in header URL.
  render() {
    return (
      <BrowserRouter>
        <div className="col-container base-div">
          <div className="top-header-padding"> </div>
          <Route path="" component={HomePage} exact/>
          <Route path="/styles" component={StylesPage} exact/>
          <Route path="/my-page" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} exact/>
          <Route path="/user" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} />
          <Route path="/new-post" render={(props) => <NewPostPage {...props} userId={this.state.loggedInUserId} />} />
          <Route path="/style" component={StylePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
