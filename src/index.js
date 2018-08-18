import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css';
import {Router, Route, browserHistory} from 'react-router'
import { firebaseApp } from './firebase';

import SignIn from './SignIn';
import SignUp from './SignUp'

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user)
  }
})

ReactDOM.render(<
  <Router path = '/' history = {browserHistory}>
    <Route path = '/app' component = {App} />
    <Route path = '/signin' component = {SignIn} />
    <Route path = '/signup' component = {SignUp} />
  </Router>, document.getElementById('root'));
