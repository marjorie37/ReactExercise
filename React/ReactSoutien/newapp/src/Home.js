import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ""
    };
    this.message = "J'aime le JS et vous ?";
    this.clicker = this.clicker.bind(this);
    this.anotherClick = this.anotherClick.bind(this);
  }

  anotherClick() {
    this.setState({
      visible: true
    });
  }

  calcul() {
    this.resultat = 1 + 1;
    //pas besoin de binder cette fonction car
    //elle n'est pas appelée dans le render et il n'y a pas de setstate
  }

  clicker(e) {
    this.message = "j'aime aussi le JEE";
    this.calcul();
    console.log(this.resultat);
  }
  render() {
    return (
      <div>
        <button onClick={this.anotherClick}>autre bouton</button>
        <a onClick={this.clicker}>Je clique !</a>;
        <p>{this.message}</p>
      </div>
    );
  }
}

export default Home;
