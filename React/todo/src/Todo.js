import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.remove = this.remove.bind(this);
    this.toggled = this.toggled.bind(this);
  }

  remove() {
    console.log("clické");
    this.props.remove(this.props.todo);
  }

  toggled(e) {
    this.setState({
      checked: e.target.checked
    });
    this.props.cocher(this.props.todo, e.target.checked);
  }

  render() {
    let classActive = "";
    if (this.state.checked) {
      classActive = "active";
    }
    // } else {
    //   classActive = "";
    //

    return (
      <li className={classActive}>
        <input type="Checkbox" onChange={this.toggled} />
        {this.props.todo.title}
        <button onClick={this.remove}>X</button>
      </li>
    );
  }
}

export default Todo;
