import React, { Component } from "react";
import { exportDefaultDeclaration } from "babel-types";
// imrc pour avoir le import
// ccs pour creer le début
class Display extends Component {
  constructor() {
    super();
    this.state = {
      title: "Nombre d'or"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>Nombre: {this.props.nombre}</p>
      </div>
    );
  }
}

export default Display;
