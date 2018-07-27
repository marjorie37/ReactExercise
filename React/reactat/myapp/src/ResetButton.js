import React, { Component } from "react";

class ResetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      times: (this.state.nombre = 0)
    });
    this.props.reset();
  }
  render() {
    return <button onClick={this.reset}>Remettre à zéro le nombre d'or</button>;
  }
}

export default ResetButton;
