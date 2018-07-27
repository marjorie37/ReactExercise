import React, { Component } from "react";

//avec behaviour
const withVisible = WrapComponent => {
  //créer un composant et le retourner
  return class withVisible extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false
      };
    }

    handleVisible() {
      this.setState({
        visible: !this.state.visible
      });
    }

    render() {
      return (
        <WrapComponent
          handleVisible={this.handleVisible}
          {...this.state}
          {...this.props}
        />
      );
      //étale les propriété du state "à la volée"
    }
  };
};

export default withVisible;
