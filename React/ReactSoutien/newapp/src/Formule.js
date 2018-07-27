import React, { Component } from "react";

class Formule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changer = this.changer.bind(this);
  }

  changer(e) {
    console.log(e.target.value);
    console.log(this.message());
  }

  message() {
    return "super message";
  }
  render() {
    return <input onChange={this.changer} />;
  }
}

export default Formule;
