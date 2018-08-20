import React, {Component} from 'react';
import Box from './Box.js';
import StylePage from './StylePage'
export default class BoxContainer extends Component {

  constructor(props) {
    super(props)
  }

  handleClick = (style_id) => {
    return(
      <StylePage styleId = {style_id} />
    )
  }

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
