import React, { Component, PropTypes }  from 'react'
import css from './home.css'
import BigButton from '../../components/Button/BigButton'

class Home extends Component {
  render () {
    return (
      <div className={css.home}>
        <h1 className={css.hi}>
          hello C4TK!
        </h1>
        <BigButton/>
      </div>
    )
  }
}

export default Home
