import React, { Component, PropTypes } from 'react'
import { Button } from 'semantic-ui-react'

const ButtonUI = props => {
  return (
    <Button onClick={ props.handleClick }>
      { props.children }
    </Button>
  )
}

ButtonUI.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func
}

export default ButtonUI
