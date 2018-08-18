import React, {Component} from 'react';
import Box from './Box.js';

export default class BoxContainer extends Component {

  generateBoxes = () => {
    let counter = 0;
    let returnArray = [];
    while (counter < parseInt(this.props.boxCount)) {
      returnArray.push(<Box />)
      counter++
    }
    return returnArray
  }

  render() {
    return (<div className = "box-container">
              {this.generateBoxes()}
            </div>)
  }
}
