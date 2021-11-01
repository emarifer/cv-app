import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
  // <React.StrictMode> // Para que no de error al usar Helmet
    <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

registerSW();

/**
 * MARKDOWN IN REACT:
 * https://www.npmjs.com/package/vite-plugin-react-md
 */