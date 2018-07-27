import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./Display";
import MagicButton from "./MagicButton";
import ResetButton from "./ResetButton";
//il va importer la classe Display (exportée) depuis le fichier Display
class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 0
    };

    this.augmenter = this.augmenter.bind(this);
    this.reset = this.reset.bind(this);
  }

  augmenter() {
    this.setState({
      nombre: this.state.nombre + 1
    });
  }
  reset() {
    this.setState({
      times: (this.state.nombre = 0)
    });
  }

  render() {
    return (
      <div className="App">
        <Display nombre={this.state.nombre} />
        <MagicButton augmenter={this.augmenter} />
        <ResetButton reset={this.reset} />
      </div>
    );
  }
}

export default App;
