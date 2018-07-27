import React, { Component } from "react";
import "./Liste.css";
import Todo from "./Todo";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            cocher={this.props.cocher}
            remove={this.props.remove}
            todo={todo}
          />
        ))}
      </ul>
    );
  }
}

export default Liste;
