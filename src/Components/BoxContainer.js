import React, {Component} from 'react';
import Box from './Box.js';

export default class BoxContainer extends Component {

  render() {
    return (<div className = "box-container">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </div>)
  }
}
