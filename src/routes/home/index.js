import React, { Component, PropTypes } from "react";
import css from "./home.css";
import { ButtonUI, InputUI, CardSimpleUI } from "../../components/SemanticUI";

class Home extends Component {

  handleClick() {
    alert("hey!");
  }

  render() {
    return (
      <div className={css.home}>
        <h1 className={css.hi}>
          hello C4TK!
        </h1>
        <ButtonUI handleClick={this.handleClick.bind(this)}>hey</ButtonUI>
        <InputUI placeholder="heyyy" />
        <CardSimpleUI />
      </div>
    );
  }
}

export default Home;
