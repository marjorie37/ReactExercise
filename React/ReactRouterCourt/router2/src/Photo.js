import React, { Component } from "react";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h3>Les photos de {this.props.match.params.username}</h3>;
  }
}

export default Photo;
