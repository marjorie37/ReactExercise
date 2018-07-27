import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class MatchUltime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: []
    };
    this.name = this.name.bind(this);
    this.image = this.image.bind(this);
  }
  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const api = res.data;
        this.setState({ api });
      });
  }

  name() {
    if (this.state.api.length === 0) {
      console.log("lol");
    } else {
      const bossk = this.state.api.find(elt => elt.name === "Bossk");
      return bossk.name;
    }
  }

  image() {
    if (this.state.api.length === 0) {
      console.log("lol");
    } else {
      const Chewbacca = this.state.api.find(elt => elt.name === "Chewbacca");
      return Chewbacca.image;
    }
  }
  render() {
    return (
      <div>
        <p>{this.name()}</p>
        <img src={this.image()} />
      </div>
    );
  }
}

export default MatchUltime;
