import React, { Component } from "react";
import "./App.css";

class Author extends Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing })}>
          Cliquez ici pour voir l'auteur
        </button>
        <h1 style={{ display: showing ? "block" : "none" }}>
          {this.props.name}
        </h1>
      </div>
    );
  }
}
export default Author;
