import React, { Component } from 'react';
import css from './services.css';

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'uello!',
    }
  }
  render() {
    return (
      <div className={css.test}>
        hello C4TK, this is {this.state.title}!
      </div>
    );
  }
}

export default Services;
