import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="search"
          onChange={e => this.props.searchTodo(e.target.value)}
        />
      </form>
    );
  }
}

export default Search;
