import React from "react";
import { render } from "react-dom";
//import css
import "./style/css/bootstrap.min.css";
import "./index.css";
//import fichier js perso
import { sampleText } from "./sampleText";
import marked from "marked";

class App extends React.Component {
  state = {
    text: sampleText
  };
  // pour conserver les inputs des users qui seront gardés pour la prochaine session
  componentWillMount() {
    const localStorageText = localStorage.getItem("text");
    console.log(localStorageText);
    // si il y a qqchose dans le localstorage, le réafficher lors du rechargement de la page
    if (localStorageText) {
      this.setState({ text: localStorageText });
    }
  }

  /* lifecycle
  permet d'enregistrer les changements dans le local storage (a trouver dans la console, app), dans notre cas il va  */
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("text", nextState.text);
  }

  editText = event => {
    const text = event.target.value;
    //permet la mise à jour de l'état 'state'
    this.setState({ text });
    // version es6 normalement on a : ({text: text})
  };

  renderText = text => {
    const renderText = marked(text, { sanitized: true });
    //sanitized permet d'éviter que l'user utilise des balises html (les balises apparaissent grace a sanitized)
    return { __html: renderText };
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              value={this.state.text}
              className="form-control"
              onChange={e => {
                this.editText(e);
              }}
            />
          </div>
          <div className="col-sm-6">
            {/*utilisé car cela concerne les inputs d'un utilisateur*/}
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
          {/*pour utiliser le fichier js qui a été importé
          {sampleText}*/}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
