import React, { Component, PropTypes } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonUI extends Component {
  render () {
    return (
      <Button onClick={ this.props.handleClick }>
        { this.props.children }
      </Button>
    )
  }
}

ButtonUI.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.function
}

export default ButtonUI
