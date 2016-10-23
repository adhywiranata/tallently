import React, { Component } from "react";
import { Provider } from "react-redux";

import Routes from "../routes";

class AppContainer extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        { Routes }
      </Provider>
    );
  }
}

export default AppContainer;
