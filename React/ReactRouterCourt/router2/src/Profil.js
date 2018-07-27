import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Photo from "./Photo";
import Message from "./Message";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <h3>
        Le profil de : {this.props.match.params.username}
        <ul>
          <Link to={`/profil/${this.props.match.params.username}/messages`}>
            messages de {this.props.match.params.username}
          </Link>
          <Link to={`/profil/${this.props.match.params.username}/photos`}>
            photos de {this.props.match.params.username}
          </Link>
        </ul>
        <Route exact path="/profil/:username" component={Message} />
        {/* pour avoir les "messages" qui s'affichent par défault 
        quand on clique sur le profil, il faut mettre "exact" dans ce cas*/}
        <Route path="/profil/:username/messages" component={Message} />
        <Route path="/profil/:username/photos" component={Photo} />
      </h3>
    );
  }
}

export default Profil;
