import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute, Link } from "react-router";
import { Provider } from "react-redux";

import AppContainer from "./containers/AppContainer.js";
const store = {}; // Not yet used.. its fandy's job. LOL
console.log("IGNORE THE ERRORS. Urusan fandy Redux nya :P :P ");

const mountNode = document.getElementById("app");

ReactDOM.render(
  <AppContainer store={store} />,
  mountNode
);
