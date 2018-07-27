import React, { Component } from "react";
import "./Heading.css";
import chuck from "./chuck.jpeg";
import Badge from "./Badge/Badge.js";



class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      nbClick: 0
    };
    this.changer = this.changer.bind(this);
  }

  changer() {
    console.log("coucou");
    this.setState({
      visible: !this.state.visible,
      nbClick: this.state.nbClick++
    });
  }
  render() {
      const headCSS = {}
      if(this.state.visible) {
          headCSS.color = "green",
      } else {
          headCss.color = "red"
      }

      
    return (
      <header>
        <h1 style={headCSS} onClick={this.changer}>Mon application</h1>
        {/*{(this.state.visible) ? <img src={chuck} />}*/}
        {this.state.visible && <img src={chuck} />}
        <Badge nbClick={this.state.nbClick} />
      </header>
    );
  }
}

export default Heading;
