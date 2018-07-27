import React, { Component } from "react";
import ResetButton from "./ResetButton";
// imrc pour avoir le import
// ccs pour creer le début
class MagicButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
    this.plus = this.plus.bind(this);
    this.reset = this.reset.bind(this);
    //mon evenement plus() sera lié à ma classe par le "this"
  }
  plus() {
    this.setState({
      times: this.state.times + 1
    });
    // appel de la callback présente parmis les props
    this.props.augmenter();
  }

  reset() {
    this.setState({
      times: (this.state.nombre = 0)
    });
  }

  render() {
    return (
      <button onClick={this.plus}>
        Augmenter le nombre d'or ({this.state.times}) fois
      </button>
    );
  }
}

export default MagicButton;
