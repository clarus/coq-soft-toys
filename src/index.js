// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

function render() {
  if (rootElement) {
    ReactDOM.render(<App onRender={render} />, rootElement);
  }
}

window.onpopstate = render;

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
