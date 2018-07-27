import React from "react";
import { render } from "react-dom";
import Formulaire from "./Formulaire";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div className="box">
        <div>
          <div className="messages">
            <Message pseudo="anto" />
          </div>
          <Formulaire />
        </div>
      </div>
    );
  }
}

export default App;
