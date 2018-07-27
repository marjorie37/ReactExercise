import React, { Component } from "react";
import withVisible from "./hoc/withVisible";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // this.handleVisible = this.handleVisible.bind(this);
  }

  //   handleVisible() {
  //     this.setState({
  //       visible: !this.state.visible
  //     });
  //   }
  render() {
    return (
      <div>
        <button onClick={this.props.handleVisible}>Voir l'image</button>
        {this.props.visible && (
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2016/09/12-cats-lady-japan-6.jpg" />
        )}
      </div>
    );
  }
}

export default withVisible(Display);
