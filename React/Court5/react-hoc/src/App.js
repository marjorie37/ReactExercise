import React, { Component } from 'react'
import Titre from './Titre';
import Home from './Home';
import Button from './Button';
import Emitter from "./emitter"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteo: "Soleil"
    };
    this.changeMeteo = this.changeMeteo.bind(this)
    this.alerter = this.alerter.bind(this);
    Emitter.addListener("alerter", this.alerter);
  }

  alerter() {
    this.setState({
      meteo: "canicule"
    })
  }

  changeMeteo() {
    this.setState({
      meteo: "Pluie"
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titre temperature={29} meteo={this.state.meteo} />
          <button onClick={this.changeMeteo}>Changer la météo</button>
          <Home />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
