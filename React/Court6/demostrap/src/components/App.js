import React, { Component } from 'react';
import "../bootstrap.min.css"
import { Button, ButtonToolbar } from "reactstrap"
import { StyledButton } from "../styled/StyledButton"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "danger"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
      color: "success"
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p><ButtonToolbar>
          <StyledButton>Button</StyledButton>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="info">Info</Button>
          <Button onClick={this.handleChange} color={this.state.color}>Warning</Button>
          <Button color="danger">Danger</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
