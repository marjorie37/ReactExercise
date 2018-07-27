import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Profil from "./Profil";
import Contact from "./Contact";
import { Route, Link } from "react-router-dom";
// !! voir index.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profil/blomki">Profil de Blomki</Link>
          <Link to="/profil/Tifus">Profil de Tifus</Link>
        </ul>

        <Route exact path="/" component={Home} />
        {/* 'exact' seulement pour la première route avec le slash */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profil/:username" component={Profil} />
      </div>
    );
  }
}

export default App;
