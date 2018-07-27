import React, { Component } from "react";
import "../App.css";
import withVisible from "./hoc/withVisible";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    // this.handleVisible = this.handleVisible.bind(this);
  }

  // handleVisible() {
  //   this.setState({
  //     visible: !this.state.visible
  //   });
  // }
  render() {
    return (
      <div className="App">
        {/* <h3 style={this.props.visible ? red : blue}>I love React</h3> */}
        {this.props.visible && <h3>I love react</h3>}
        <button onClick={this.props.handleVisible}>Cliquez-moi</button>
      </div>
    );
  }
}

export default withVisible(App);
