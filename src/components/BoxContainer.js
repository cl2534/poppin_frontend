import React, {Component} from 'react';
import Box from './Box.js';

export default class BoxContainer extends Component {

  constructor(props) {
    super(props)
  }

  generateBoxes = () => {
    let returnArray = []
    for (let styleIndex in this.props.styles) {
      console.log(this.props.styles[styleIndex]);
      returnArray.push(<Box key={this.props.styles[styleIndex].id} style={this.props.styles[styleIndex]}/>)
    }
    console.log(returnArray)
    return returnArray
  }


  render() {
    return (<div className = "box-container">
              {this.generateBoxes()}
            </div>)
  }
}
