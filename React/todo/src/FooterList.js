import React, { Component } from "react";
import "./footerList.css";

class FooterList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p>
        <i>Nombre de todos restants : {this.props.nb}</i>
      </p>
    );
  }
}

export default FooterList;
