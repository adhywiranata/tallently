import React, { Component, PropTypes }  from 'react'
import css                              from './home.css'
import ButtonUI                         from '../../components/SemanticUI/Button/ButtonUI'
import InputUI                          from '../../components/SemanticUI/Input/InputUI'
import { DummyUI, ButtonUI2 }           from '../../components/SemanticUI'

console.log(DummyUI)
console.log(ButtonUI2)

class Home extends Component {

  handleClick () {
      alert('hey!')
  }

  render () {
    return (
      <div className={css.home}>
        <h1 className={css.hi}>
          hello C4TK!
        </h1>
        <ButtonUI handleClick={this.handleClick.bind(this)}>hey</ButtonUI>
        <InputUI placeholder='heyyy' />
      </div>
    )
  }
}

export default Home
