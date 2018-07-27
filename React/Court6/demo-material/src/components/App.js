import React, { Component } from 'react';
import { Button, Typography, Toolbar, AppBar } from '@material-ui/core';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              ReactJs Rocks !
          </Typography>
          </Toolbar>
        </AppBar>
        <Button variant="contained" color="primary">
          Hello World
    </Button>
        <Button variant="contained" color="secondary">
          I love JS
    </Button>
        <Button size="large">large</Button>
      </div>
    );
  }
}

export default App;
