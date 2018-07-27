import React, { Component } from "react";
import { withRouter } from "react-router";
//fonction qui permet de transmettre toutes les fonctionnalités à un composant react

class MagicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.augmenter = this.augmenter.bind(this);
  }
  augmenter() {
    const nb = this.state.counter + 1;
    if (nb < 10) {
      this.setState({
        counter: nb
      });
    } else {
      this.props.history.push("profil/tifus");
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.augmenter}>Augmenter</button>
      </div>
    );
  }
}
//higher-order component
export default withRouter(MagicButton);
