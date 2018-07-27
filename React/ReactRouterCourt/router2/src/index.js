import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
// npm install --save react-router-dom pour installer le react router
//pour utiliser react router -->

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // BrowserRouter à ajouter à ReactDOM.render,
  // il wrappe "App", on peut mettre
  // un autre composant qui lui seul aura des routes
  document.getElementById("root")
);
registerServiceWorker();
