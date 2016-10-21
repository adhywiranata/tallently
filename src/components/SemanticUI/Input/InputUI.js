import React, { Component, PropTypes } from 'react'
import { Input } from 'semantic-ui-react'

class InputUI extends Component {
  render () {
    return (
      <Input placeholder={ this.props.placeholder } />
    )
  }
}

InputUI.propTypes = {
  placeholder: PropTypes.string
}

export default InputUI
