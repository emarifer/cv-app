import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerSW();

/**
 * MARKDOWN IN REACT:
 * https://www.npmjs.com/package/vite-plugin-react-md
 */

/**
 * SOLUCION AL PROBLEMA DE:
 * «Using UNSAFE_componentWillMount in strict mode is not recommended» AL USAR
 * REACT-HELMET. VER:
 * https://github.com/nfl/react-helmet/issues/548#issuecomment-686460270
 */