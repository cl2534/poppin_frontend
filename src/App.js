import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import UserPage from './components/UserPage.js';
import StylesPage from './components/StylesPage.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="col-container">
          <Route path="" component={HomePage} exact/>
          <Route path="/styles" component={StylesPage} exact/>
          <Route path="/mypage" component={UserPage} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
