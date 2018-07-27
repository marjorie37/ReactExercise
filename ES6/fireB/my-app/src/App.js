import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase.js";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "nom"
    };
  }
  componentDidMount() {
    const rootRef = firebase.database().ref();
    const nameRef = rootRef.child("nom");
    nameRef.on("value", snap => {
      this.setState({
        nom: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.nom}</h1>
      </div>
    );
  }
}

export default App;
