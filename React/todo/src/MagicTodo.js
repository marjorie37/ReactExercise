import React, { Component } from "react";
import "./MagicTodo.css";

class MagicTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    //props = present dans le parent
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          required
          name="title"
          placeholder="What needs to be done ?"
          onChange={e => this.setState({ title: e.target.value })}
        />
      </form>
    );
  }
}

export default MagicTodo;
