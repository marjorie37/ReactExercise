import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h3>Les messages de {this.props.match.params.username}</h3>;
  }
}

export default Message;
