//a container class that contains Box components. The number of generated Boxes
//it displays is determined using props.

import React, {Component} from 'react';
import Box from './Box.js';
import StylePage from './StylePage'
export default class BoxContainer extends Component {

  constructor(props) {
    super(props)
  }

//click event handler for a box, takes you to the style page.
  handleClick = (style_id) => {
    return(
      <StylePage styleId = {style_id} />
    )
  }

//renders box components contained in its props.
  generateBoxes = () => {
    if (this.props.styles == []) {
      return null
    }
    let returnArray = []
    for (let styleIndex in this.props.styles) {
      let generatedKey = (this.props.styles[styleIndex].id.toString() + '-' + Math.random().toString())
      returnArray.push(<Box key={generatedKey} id = {this.props.styles[styleIndex].id} style={this.props.styles[styleIndex]}
      handleClick = {this.handleClick}
        />)
    }
    return returnArray
  }


  render() {
    return (<div className = "box-container">
              {this.generateBoxes()}
            </div>)
  }
}
