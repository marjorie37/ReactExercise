import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept();
}
// remplacement de module à chaud

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
